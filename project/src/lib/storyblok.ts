const API_KEY = 'enter api key here';

type StoryblokPost = {
  id: string;
  title: string;
  excerpt?: string;
  image?: string;
  content?: any;
  slug?: string;
};

async function fetchJSON(url: string) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export async function fetchPosts(): Promise<StoryblokPost[]> {
  if (!API_KEY || API_KEY === 'enter api key here') return [];

  const url = `https://api.storyblok.com/v2/cdn/stories?starts_with=blog&version=published&token=${API_KEY}`;
  const data = await fetchJSON(url);
  if (!data.stories) return [];

  return data.stories.map((s: any) => ({
    id: s.uuid || s.id,
    title: s.name || s.content?.title || s.slug,
    excerpt: s.content?.excerpt || '',
    image: s.content?.featuredImage || (s.content?.image && s.content.image.filename) || '',
    content: s.content,
    slug: s.slug,
  }));
}

export async function fetchPost(slug: string): Promise<StoryblokPost | null> {
  if (!API_KEY || API_KEY === 'enter api key here') return null;
  const url = `https://api.storyblok.com/v2/cdn/stories/${slug}?version=published&token=${API_KEY}`;
  try {
    const data = await fetchJSON(url);
    const s = data.story;
    return {
      id: s.uuid || s.id,
      title: s.name || s.content?.title || s.slug,
      excerpt: s.content?.excerpt || '',
      image: s.content?.featuredImage || (s.content?.image && s.content.image.filename) || '',
      content: s.content,
      slug: s.slug,
    };
  } catch (err) {
    return null;
  }
}

// Load Storyblok Bridge for Visual Editor live updates
export function initStoryblokBridge() {
  if (typeof window === 'undefined') return;
  // @ts-ignore
  if ((window as any).storyblokInitialized) return;

  const existing = document.querySelector('script[src*="storyblok-latest.js"]');
  if (!existing) {
    const script = document.createElement('script');
    script.src = 'https://app.storyblok.com/f/storyblok-latest.js';
    script.async = true;
    document.body.appendChild(script);
  }

  // @ts-ignore
  (window as any).storyblokInitialized = true;

  // If the bridge loads later, it will call window.storyblok; we attempt to attach a handler periodically
  const attach = () => {
    // @ts-ignore
    const { storyblok } = window as any;
    if (storyblok && storyblok.init) {
      // @ts-ignore
      const sb = storyblok.init();
      sb.on(['published', 'change'], () => window.location.reload());
      return true;
    }
    return false;
  };

  const interval = setInterval(() => {
    if (attach()) clearInterval(interval);
  }, 500);
}

export default { fetchPosts, fetchPost, initStoryblokBridge };
