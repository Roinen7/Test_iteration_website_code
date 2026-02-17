import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://knejcfqvcrshviisziwf.supabase.co";
const supabaseAnonKey = "sb_publishable_xrN36f-_9ewGG8z8R9wuGw_y4qvH_Lr";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const tools = [
    {
        name: "ChatGPT",
        description: "Advanced AI chatbot by OpenAI for conversation, content creation, coding assistance, and problem-solving across diverse domains.",
        url: "https://chat.openai.com",
        category: "Chatbot",
        pricing_type: "Freemium",
        image_url: null,
    },
    {
        name: "Midjourney",
        description: "AI-powered image generation tool that creates stunning artwork and visuals from text prompts with remarkable artistic quality.",
        url: "https://midjourney.com",
        category: "Image Generation",
        pricing_type: "Paid",
        image_url: null,
    },
    {
        name: "Jasper",
        description: "AI writing assistant designed for marketing teams to create high-quality blog posts, ads, emails, and social media content at scale.",
        url: "https://jasper.ai",
        category: "Copywriting",
        pricing_type: "Paid",
        image_url: null,
    },
    {
        name: "Copy.ai",
        description: "AI-powered copywriting tool that generates marketing copy, blog content, product descriptions, and social media posts in seconds.",
        url: "https://copy.ai",
        category: "Copywriting",
        pricing_type: "Freemium",
        image_url: null,
    },
    {
        name: "DALL·E 3",
        description: "OpenAI's latest image generation model creating photorealistic images and art from natural language descriptions with high fidelity.",
        url: "https://openai.com/dall-e-3",
        category: "Image Generation",
        pricing_type: "Paid",
        image_url: null,
    },
    {
        name: "Runway ML",
        description: "Creative AI toolkit for video generation, editing, and visual effects. Offers text-to-video, image-to-video, and advanced editing tools.",
        url: "https://runwayml.com",
        category: "Video",
        pricing_type: "Freemium",
        image_url: null,
    },
    {
        name: "GitHub Copilot",
        description: "AI pair programmer that suggests code completions, entire functions, and helps developers write code faster directly in their IDE.",
        url: "https://github.com/features/copilot",
        category: "Code",
        pricing_type: "Paid",
        image_url: null,
    },
    {
        name: "Notion AI",
        description: "AI-powered writing and productivity assistant built into Notion. Summarizes notes, generates content, and helps organize information.",
        url: "https://notion.so/product/ai",
        category: "Productivity",
        pricing_type: "Freemium",
        image_url: null,
    },
    {
        name: "Grammarly",
        description: "AI writing companion that provides real-time grammar, spelling, tone, and style suggestions across all your writing platforms.",
        url: "https://grammarly.com",
        category: "Copywriting",
        pricing_type: "Freemium",
        image_url: null,
    },
    {
        name: "Synthesia",
        description: "AI video creation platform that generates professional videos with AI avatars from text. No cameras, actors, or studios needed.",
        url: "https://synthesia.io",
        category: "Video",
        pricing_type: "Paid",
        image_url: null,
    },
    {
        name: "ElevenLabs",
        description: "State-of-the-art AI voice synthesis and cloning platform. Create natural-sounding voiceovers, audiobooks, and voice content.",
        url: "https://elevenlabs.io",
        category: "Audio",
        pricing_type: "Freemium",
        image_url: null,
    },
    {
        name: "Canva AI",
        description: "AI-enhanced design platform with Magic Design, text-to-image, background remover, and smart layout suggestions for stunning graphics.",
        url: "https://canva.com",
        category: "Design",
        pricing_type: "Freemium",
        image_url: null,
    },
    {
        name: "Perplexity AI",
        description: "AI-powered search engine that provides direct, cited answers to questions by searching the web and synthesizing information in real-time.",
        url: "https://perplexity.ai",
        category: "Research",
        pricing_type: "Freemium",
        image_url: null,
    },
    {
        name: "Cursor",
        description: "AI-first code editor built on VSCode with deep AI integration for code generation, editing, debugging, and intelligent autocomplete.",
        url: "https://cursor.sh",
        category: "Code",
        pricing_type: "Freemium",
        image_url: null,
    },
    {
        name: "Writesonic",
        description: "AI content creation platform for SEO-optimized articles, landing pages, product descriptions, and ad copy at enterprise scale.",
        url: "https://writesonic.com",
        category: "Copywriting",
        pricing_type: "Freemium",
        image_url: null,
    },
    {
        name: "Pictory",
        description: "AI-powered video creation tool that transforms long-form content into short, shareable branded videos automatically.",
        url: "https://pictory.ai",
        category: "Video",
        pricing_type: "Paid",
        image_url: null,
    },
    {
        name: "Surfer SEO",
        description: "AI-driven SEO optimization tool that analyzes top-ranking pages and provides data-driven content guidelines for higher search rankings.",
        url: "https://surferseo.com",
        category: "Marketing",
        pricing_type: "Paid",
        image_url: null,
    },
    {
        name: "Otter.ai",
        description: "AI meeting assistant that records, transcribes, and summarizes meetings in real-time. Integrates with Zoom, Teams, and Google Meet.",
        url: "https://otter.ai",
        category: "Productivity",
        pricing_type: "Freemium",
        image_url: null,
    },
    {
        name: "Claude",
        description: "Anthropic's AI assistant known for nuanced understanding, long document analysis, coding, and thoughtful conversation with safety focus.",
        url: "https://claude.ai",
        category: "Chatbot",
        pricing_type: "Freemium",
        image_url: null,
    },
    {
        name: "Gemini",
        description: "Google's multimodal AI model powering advanced reasoning, code generation, creative writing, and visual understanding capabilities.",
        url: "https://gemini.google.com",
        category: "Chatbot",
        pricing_type: "Freemium",
        image_url: null,
    },
];

async function seed() {
    console.log("🚀 Starting database seeding...");
    const { error } = await supabase.from("tools").upsert(tools);
    if (error) console.error("❌ Error seeding tools:", error.message);
    else console.log("✅ Successfully seeded 20 tools!");
}

seed().catch(console.error);
