/*
  Seed script for Storyblok.
  Usage:
    Set env vars then run: node storyblok/seed-storyblok.js

  Required env vars:
    STORYBLOK_SPACE_ID       - your Storyblok space id
    STORYBLOK_MANAGEMENT_TOKEN - a Storyblok Management API token (keep private)

  What it does:
    - Creates a simple `post` component (if not existing)
    - Creates a few sample stories under `blog/` with that component
    - Publishes the stories

  Note: This script uses the Management API. Do NOT run this with a public CDN token.
*/

const fetch = globalThis.fetch || require('node-fetch');

const SPACE_ID = process.env.STORYBLOK_SPACE_ID;
const TOKEN = process.env.STORYBLOK_MANAGEMENT_TOKEN;

if (!SPACE_ID || !TOKEN) {
  console.error('Error: STORYBLOK_SPACE_ID and STORYBLOK_MANAGEMENT_TOKEN must be set as env vars.');
  process.exit(1);
}

const API_ROOT = `https://api.storyblok.com/v1`;

async function api(path, method = 'GET', body) {
  const url = `${API_ROOT}${path}?token=${TOKEN}`;
  const res = await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  });
  const json = await res.json();
  if (!res.ok) {
    throw new Error(JSON.stringify(json));
  }
  return json;
}

async function ensurePostComponent() {
  console.log('Checking for existing components...');
  const comps = await api(`/spaces/${SPACE_ID}/components`);
  const exists = comps && comps.components && comps.components.find(c => c.name === 'post');
  if (exists) {
    console.log('Found existing `post` component. Skipping creation.');
    return exists;
  }

  console.log('Creating `post` component...');
  const component = {
    component: {
      name: 'post',
      display_name: 'Post',
      schema: {
        title: { type: 'text' },
        excerpt: { type: 'text' },
        featured_image: { type: 'asset' },
        body: { type: 'richtext' }
      }
    }
  };

  const created = await api(`/spaces/${SPACE_ID}/components`, 'POST', component);
  console.log('Created component:', created.component && created.component.name);
  return created.component;
}

const samplePosts = [
  {
    name: 'The year of agents',
    slug: 'the-year-of-agents',
    content: {
      component: 'post',
      title: 'The year of agents',
      excerpt: 'Last year was widely anticipated to be the year of AI, and it indeed turned out to be the year of...',
      body: '<p>Last year was widely anticipated to be the year of AI...</p>'
    }
  },
  {
    name: 'What should you expect from AI in the near term?',
    slug: 'what-should-you-expect-from-ai',
    content: {
      component: 'post',
      title: 'What should you expect from AI in the near term?',
      excerpt: 'Many people I speak to either underestimate AI by highlighting all the limitations the technology...',
      body: '<p>Many people I speak to either underestimate AI...</p>'
    }
  },
  {
    name: 'Digitizing Unstructured Accounting Data with LLMs',
    slug: 'digitizing-unstructured-accounting-data',
    content: {
      component: 'post',
      title: 'Digitizing Unstructured Accounting Data with LLMs',
      excerpt: 'Dealing with unstructured accounting data can be a nightmare, especially when it comes in the form...',
      body: '<p>Dealing with unstructured accounting data can be a nightmare...</p>'
    }
  }
];

async function createStory(story) {
  const body = {
    story: {
      name: story.name,
      slug: `blog/${story.slug}`,
      content: story.content,
      is_startpage: false
    },
    publish: 1
  };
  const created = await api(`/spaces/${SPACE_ID}/stories`, 'POST', body);
  return created;
}

async function main() {
  try {
    await ensurePostComponent();
    for (const p of samplePosts) {
      console.log('Creating story:', p.slug);
      const res = await createStory(p);
      console.log('Created:', res.story && res.story.full_slug);
    }
    console.log('Done. Check your Storyblok space for new stories under the `blog/` path.');
  } catch (err) {
    console.error('Error:', err.message || err);
    process.exit(1);
  }
}

main();
