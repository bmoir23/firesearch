import { NextResponse } from 'next/server';

const isConfigured = (val?: string) => {
	if (!val) return false;
	const trimmed = val.trim();
	if (!trimmed) return false;
	if (trimmed.startsWith("your_") || trimmed === "your-api-key") return false;
	return true;
};

export async function GET() {
	const environmentStatus = {
		FIRECRAWL_API_KEY: isConfigured(process.env.FIRECRAWL_API_KEY),
		OPENROUTER_API_KEY: isConfigured(process.env.OPENROUTER_API_KEY),
		GOOGLE_GENERATIVE_AI_API_KEY: isConfigured(
			process.env.GOOGLE_GENERATIVE_AI_API_KEY || process.env.GEMINI_API_KEY,
		),
		CLOUDFLARE_API_KEY: isConfigured(
			process.env.CLOUDFLARE_API_KEY || process.env.CLOUDFLARE_API_TOKEN,
		),
		CLOUDFLARE_ACCOUNT_ID: isConfigured(process.env.CLOUDFLARE_ACCOUNT_ID),
		OPENAI_API_KEY: isConfigured(process.env.OPENAI_API_KEY),
	};

	return NextResponse.json({ environmentStatus });
}
