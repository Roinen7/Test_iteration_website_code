const sanityClient = require('@sanity/client');

// Usage:
// Set env vars then run: node sanity/create-sample.js
// Example (PowerShell):
// $env:SANITY_AUTH_TOKEN = "<your_token>"; $env:SANITY_PROJECT_ID = "253nmn25"; $env:SANITY_DATASET = "production"; node sanity/create-sample.js

const projectId = process.env.SANITY_PROJECT_ID || '253nmn25';
const dataset = process.env.SANITY_DATASET || 'production';
const token = process.env.SANITY_AUTH_TOKEN;

if (!token) {
  console.error('Error: SANITY_AUTH_TOKEN environment variable is required.');
  process.exit(1);
}

const client = sanityClient({
  projectId,
  dataset,
  token,
  useCdn: false,
  apiVersion: '2025-12-12',
});

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

async function main() {
  try {
    // Sample author
    const authorName = 'Amartya Kaviraj';
    const authorSlug = slugify(authorName);
    const authorId = `author-${authorSlug}`;

    const authorDoc = {
      _id: authorId,
      _type: 'author',
      name: authorName,
      slug: { _type: 'slug', current: authorSlug },
      bio: [
        {
          _type: 'block',
          children: [
            { _type: 'span', text: 'Founder and AI practitioner. Writes about AI automation and business.' },
          ],
        },
      ],
    };

    const createdAuthor = await client.createIfNotExists(authorDoc);
    console.log('Author created or exists:', createdAuthor._id);

    // Sample post
    const postTitle = 'The year of agents';
    const postSlug = slugify(postTitle);
    const postId = `post-${postSlug}`;

    const postDoc = {
      _id: postId,
      _type: 'post',
      title: postTitle,
      slug: { _type: 'slug', current: postSlug },
      author: { _type: 'reference', _ref: createdAuthor._id },
      body: [
        {
          _type: 'block',
          children: [
            { _type: 'span', text: 'Sample post content: This is an example article created programmatically.' },
          ],
        },
      ],
    };

    const createdPost = await client.createIfNotExists(postDoc);
    console.log('Post created or exists:', createdPost._id);

    console.log('\nDone. Verify in your Sanity Studio (http://localhost:3333 or deployed Studio).');

  } catch (err) {
    console.error('Error creating sample documents:', err.message || err);
    process.exit(1);
  }
}

main();
