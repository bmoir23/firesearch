// Search Engine Configuration
export const SEARCH_CONFIG = {
  // Search Settings
  MAX_SEARCH_QUERIES: 4,        // Maximum number of search queries to generate
  MAX_SOURCES_PER_SEARCH: 6,     // Maximum sources to return per search query
  MAX_SOURCES_TO_SCRAPE: 6,      // Maximum sources to scrape for additional content

  // Content Processing
  MIN_CONTENT_LENGTH: 100,       // Minimum content length to consider valid
  SUMMARY_CHAR_LIMIT: 100,       // Character limit for source summaries
  CONTEXT_PREVIEW_LENGTH: 500,   // Preview length for previous context
  ANSWER_CHECK_PREVIEW: 2500,    // Content preview length for answer checking
  MAX_SOURCES_TO_CHECK: 10,      // Maximum sources to check for answers

  // Retry Logic
  MAX_RETRIES: 2,                // Maximum retry attempts for failed operations
  MAX_SEARCH_ATTEMPTS: 3,        // Maximum attempts to find answers via search
  MIN_ANSWER_CONFIDENCE: 0.3,    // Minimum confidence (0-1) that a question was answered
  EARLY_TERMINATION_CONFIDENCE: 0.8, // Confidence level to skip additional searches

  // Timeouts
  SCRAPE_TIMEOUT: 15000,         // Timeout for scraping operations (ms)

  // Performance
  SOURCE_ANIMATION_DELAY: 50,    // Delay between source animations (ms) - reduced from 150
  PARALLEL_SUMMARY_GENERATION: true, // Generate summaries in parallel
} as const;

// You can also export individual configs for different components
export const UI_CONFIG = {
  ANIMATION_DURATION: 300,       // Default animation duration (ms)
  SOURCE_FADE_DELAY: 50,         // Delay between source animations (ms)
  MESSAGE_CYCLE_DELAY: 2000,     // Delay for cycling through messages (ms)
} as const;

export type AIProvider = 'openrouter' | 'gemini' | 'cloudflare';

export interface AIModelDefinition {
  id: string;
  name: string;
  provider: AIProvider;
  badge: string;
  description: string;
  recommendedRole?: 'fast' | 'quality' | 'both';
}

export const AI_PROVIDER_INFO: Record<AIProvider, {
  label: string;
  shortLabel: string;
  description: string;
  keyEnvVar: string;
  getKeyUrl: string;
}> = {
  openrouter: {
    label: 'OpenRouter (Free Models)',
    shortLabel: 'OpenRouter Free',
    description: 'Free open-weight & frontier models via OpenRouter',
    keyEnvVar: 'OPENROUTER_API_KEY',
    getKeyUrl: 'https://openrouter.ai/keys',
  },
  gemini: {
    label: 'Google Gemini',
    shortLabel: 'Google Gemini',
    description: 'Fast & multimodal reasoning models from Google AI Studio',
    keyEnvVar: 'GOOGLE_GENERATIVE_AI_API_KEY',
    getKeyUrl: 'https://aistudio.google.com/app/apikey',
  },
  cloudflare: {
    label: 'Cloudflare Workers AI',
    shortLabel: 'Cloudflare AI',
    description: 'Edge serverless inference powered by Cloudflare Workers AI',
    keyEnvVar: 'CLOUDFLARE_API_KEY + CLOUDFLARE_ACCOUNT_ID',
    getKeyUrl: 'https://dash.cloudflare.com/?to=/:account/ai/workers-ai',
  },
};

export const AVAILABLE_MODELS: AIModelDefinition[] = [
  // OpenRouter Free Models
  {
    id: 'openrouter/free',
    name: 'OpenRouter Auto Free Router',
    provider: 'openrouter',
    badge: 'Free • Auto',
    description: 'Automatically routes to the best available free model on OpenRouter',
    recommendedRole: 'both',
  },
  {
    id: 'meta-llama/llama-3.3-70b-instruct:free',
    name: 'Llama 3.3 70B Instruct',
    provider: 'openrouter',
    badge: 'Free • 70B',
    description: 'Meta Llama 3.3 70B high-accuracy instruction model',
    recommendedRole: 'quality',
  },
  {
    id: 'deepseek/deepseek-chat-v3-0324:free',
    name: 'DeepSeek V3 (0324)',
    provider: 'openrouter',
    badge: 'Free • Frontier',
    description: 'DeepSeek V3 strong general-purpose synthesis & analysis model',
    recommendedRole: 'quality',
  },
  {
    id: 'deepseek/deepseek-r1:free',
    name: 'DeepSeek R1',
    provider: 'openrouter',
    badge: 'Free • Reasoning',
    description: 'DeepSeek R1 deep reasoning model for complex research questions',
    recommendedRole: 'quality',
  },
  {
    id: 'google/gemma-3-27b-it:free',
    name: 'Gemma 3 27B IT',
    provider: 'openrouter',
    badge: 'Free • Fast',
    description: 'Google Gemma 3 27B instruction-tuned open model',
    recommendedRole: 'fast',
  },
  {
    id: 'qwen/qwen3-235b-a22b:free',
    name: 'Qwen 3 235B A22B',
    provider: 'openrouter',
    badge: 'Free • MoE',
    description: 'Alibaba flagship Mixture-of-Experts model on OpenRouter Free',
    recommendedRole: 'quality',
  },
  {
    id: 'mistralai/mistral-small-3.1-24b-instruct:free',
    name: 'Mistral Small 3.1 24B',
    provider: 'openrouter',
    badge: 'Free • Fast',
    description: 'Low-latency 24B model ideal for query planning & summarization',
    recommendedRole: 'fast',
  },
  {
    id: 'nvidia/llama-3.1-nemotron-nano-8b-v1:free',
    name: 'Nemotron Nano 8B',
    provider: 'openrouter',
    badge: 'Free • Ultra-Fast',
    description: 'NVIDIA compact 8B model for rapid sub-query extraction',
    recommendedRole: 'fast',
  },

  // Google Gemini Models
  {
    id: 'gemini-2.5-flash',
    name: 'Gemini 2.5 Flash',
    provider: 'gemini',
    badge: 'Fast • Thinking',
    description: 'Best price-performance Gemini 2.5 model for fast research & synthesis',
    recommendedRole: 'both',
  },
  {
    id: 'gemini-2.5-pro',
    name: 'Gemini 2.5 Pro',
    provider: 'gemini',
    badge: 'Pro • Reasoning',
    description: 'Google flagship reasoning model for deep multi-source synthesis',
    recommendedRole: 'quality',
  },
  {
    id: 'gemini-2.0-flash',
    name: 'Gemini 2.0 Flash',
    provider: 'gemini',
    badge: 'Fast • Reliable',
    description: 'High-speed workhorse model with 1M token context window',
    recommendedRole: 'both',
  },
  {
    id: 'gemini-2.0-flash-lite',
    name: 'Gemini 2.0 Flash Lite',
    provider: 'gemini',
    badge: 'Ultra-Fast',
    description: 'Lowest-latency Gemini model for sub-query planning & source summaries',
    recommendedRole: 'fast',
  },
  {
    id: 'gemini-1.5-pro',
    name: 'Gemini 1.5 Pro',
    provider: 'gemini',
    badge: 'Long Context',
    description: '2M context window model for large document synthesis',
    recommendedRole: 'quality',
  },
  {
    id: 'gemini-1.5-flash',
    name: 'Gemini 1.5 Flash',
    provider: 'gemini',
    badge: 'Fast',
    description: 'Fast and versatile multimodal model',
    recommendedRole: 'fast',
  },

  // Cloudflare Workers AI Models
  {
    id: '@cf/meta/llama-3.3-70b-instruct-fp8-fast',
    name: 'Llama 3.3 70B FP8 Fast',
    provider: 'cloudflare',
    badge: 'CF • 70B Fast',
    description: 'Quantized FP8 Llama 3.3 70B running on Cloudflare global edge',
    recommendedRole: 'both',
  },
  {
    id: '@cf/deepseek-ai/deepseek-r1-distill-qwen-32b',
    name: 'DeepSeek R1 Distill Qwen 32B',
    provider: 'cloudflare',
    badge: 'CF • Reasoning',
    description: 'Distilled reasoning model on Cloudflare Workers AI',
    recommendedRole: 'quality',
  },
  {
    id: '@cf/qwen/qwq-32b',
    name: 'Qwen QwQ 32B',
    provider: 'cloudflare',
    badge: 'CF • Reasoning',
    description: 'Qwen 32B reasoning and analytical synthesis model',
    recommendedRole: 'quality',
  },
  {
    id: '@cf/mistralai/mistral-small-3.1-24b-instruct',
    name: 'Mistral Small 3.1 24B',
    provider: 'cloudflare',
    badge: 'CF • Balanced',
    description: 'Fast 24B instruction model on Cloudflare Workers AI',
    recommendedRole: 'both',
  },
  {
    id: '@cf/google/gemma-3-12b-it',
    name: 'Gemma 3 12B IT',
    provider: 'cloudflare',
    badge: 'CF • Fast',
    description: 'Google Gemma 3 12B on Cloudflare Workers AI',
    recommendedRole: 'fast',
  },
  {
    id: '@cf/meta/llama-3.1-8b-instruct-fast',
    name: 'Llama 3.1 8B Instruct Fast',
    provider: 'cloudflare',
    badge: 'CF • Ultra-Fast',
    description: 'Ultra-low latency 8B model for rapid planning & scraping checks',
    recommendedRole: 'fast',
  },
];

export type SearchDepthPreset = 'quick' | 'standard' | 'deep' | 'custom';
export type ResponseStyle = 'comprehensive' | 'concise' | 'bullet-points' | 'academic' | 'eli5';
export type SearchTimeRange = 'any' | 'day' | 'week' | 'month' | 'year';

export interface ProviderApiKeys {
  firecrawlApiKey?: string;
  openrouterApiKey?: string;
  geminiApiKey?: string;
  cloudflareApiKey?: string;
  cloudflareAccountId?: string;
}

export interface SearchCustomizationOptions {
  provider: AIProvider;
  model: string;
  fastModel: string; // 'same' or a specific model ID
  customModelId?: string;
  searchDepth: SearchDepthPreset;
  maxSearchQueries: number;
  maxSourcesPerSearch: number;
  maxSourcesToScrape: number;
  maxSearchAttempts: number;
  minAnswerConfidence: number;
  responseStyle: ResponseStyle;
  temperature: number;
  timeRange: SearchTimeRange;
  includeFollowUpQuestions: boolean;
  parallelSummaries: boolean;
  customInstructions?: string;
  apiKeys?: ProviderApiKeys;
}

export const SEARCH_DEPTH_PRESETS: Record<Exclude<SearchDepthPreset, 'custom'>, {
  label: string;
  description: string;
  maxSearchQueries: number;
  maxSourcesPerSearch: number;
  maxSourcesToScrape: number;
  maxSearchAttempts: number;
}> = {
  quick: {
    label: 'Quick',
    description: 'Fast overview (2 queries, 4 sources/query, 1 pass)',
    maxSearchQueries: 2,
    maxSourcesPerSearch: 4,
    maxSourcesToScrape: 3,
    maxSearchAttempts: 1,
  },
  standard: {
    label: 'Standard',
    description: 'Balanced research (4 queries, 6 sources/query, up to 3 passes)',
    maxSearchQueries: 4,
    maxSourcesPerSearch: 6,
    maxSourcesToScrape: 6,
    maxSearchAttempts: 3,
  },
  deep: {
    label: 'Deep Research',
    description: 'Exhaustive multi-pass analysis (8 queries, 8 sources/query, up to 4 passes)',
    maxSearchQueries: 8,
    maxSourcesPerSearch: 8,
    maxSourcesToScrape: 10,
    maxSearchAttempts: 4,
  },
};

export const RESPONSE_STYLE_INFO: Record<ResponseStyle, {
  label: string;
  promptInstruction: string;
}> = {
  comprehensive: {
    label: 'Comprehensive',
    promptInstruction: 'Provide a thorough, well-structured, comprehensive answer with clear sections, detailed explanations, and citations [1], [2], etc.',
  },
  concise: {
    label: 'Concise & Direct',
    promptInstruction: 'Provide a concise, high-signal, direct answer that gets straight to the point without fluff while keeping accurate citations [1], [2], etc.',
  },
  'bullet-points': {
    label: 'Key Takeaways',
    promptInstruction: 'Format the response primarily as organized bullet points and executive takeaways with bold lead-ins and citations [1], [2], etc.',
  },
  academic: {
    label: 'Academic / Technical',
    promptInstruction: 'Use a rigorous, analytical, and technical tone. Emphasize methodology, nuances, trade-offs, quantitative evidence, and precise citations [1], [2], etc.',
  },
  eli5: {
    label: 'Simple / ELI5',
    promptInstruction: 'Explain the concepts in simple, accessible everyday language with helpful analogies while still citing sources [1], [2], etc.',
  },
};

export const DEFAULT_SEARCH_OPTIONS: SearchCustomizationOptions = {
  provider: 'openrouter',
  model: 'meta-llama/llama-3.3-70b-instruct:free',
  fastModel: 'same',
  customModelId: '',
  searchDepth: 'standard',
  maxSearchQueries: SEARCH_CONFIG.MAX_SEARCH_QUERIES,
  maxSourcesPerSearch: SEARCH_CONFIG.MAX_SOURCES_PER_SEARCH,
  maxSourcesToScrape: SEARCH_CONFIG.MAX_SOURCES_TO_SCRAPE,
  maxSearchAttempts: SEARCH_CONFIG.MAX_SEARCH_ATTEMPTS,
  minAnswerConfidence: SEARCH_CONFIG.MIN_ANSWER_CONFIDENCE,
  responseStyle: 'comprehensive',
  temperature: 0,
  timeRange: 'any',
  includeFollowUpQuestions: true,
  parallelSummaries: true,
  customInstructions: '',
};

// Model Configuration (legacy defaults)
export const MODEL_CONFIG = {
	FAST_MODEL: "meta-llama/llama-3.3-70b-instruct:free",
	QUALITY_MODEL: "meta-llama/llama-3.3-70b-instruct:free",
	TEMPERATURE: 0,
} as const;
