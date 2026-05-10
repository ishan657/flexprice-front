import { NODE_ENV, NodeEnv } from '@/types';
import { createClient } from '@supabase/supabase-js';

const isSelfHosted = NODE_ENV === NodeEnv.SELF_HOSTED;

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const isStorybook = Boolean(import.meta.env.STORYBOOK);
const shouldUseMockClient = isSelfHosted || isStorybook || !supabaseUrl || !supabaseKey;

// Create a mock client for self-hosted mode, Storybook, and local builds without Supabase config.
const createMockClient = () => {
	return {
		auth: {
			signIn: async () => ({ user: null, error: null }),
			signInWithPassword: async () => ({ data: { user: null, session: null }, error: null }),
			signInWithOAuth: async () => ({ data: null, error: null }),
			signUp: async () => ({ data: { user: null, session: null }, error: null }),
			signOut: async () => ({ error: null }),
			onAuthStateChange: () => ({ data: null, error: null }),
			getSession: async () => ({ data: { session: null }, error: null }),
			getUser: async () => ({ data: { user: null }, error: null }),
			refreshSession: async () => ({ data: { session: null }, error: null }),
			resend: async () => ({ data: null, error: null }),
			resetPasswordForEmail: async () => ({ data: null, error: null }),
			updateUser: async () => ({ data: { user: null }, error: null }),
		},
		from: () => ({
			select: async () => [],
			insert: async () => ({ data: null, error: null }),
			update: async () => ({ data: null, error: null }),
			delete: async () => ({ data: null, error: null }),
		}),
	};
};

const supabase = shouldUseMockClient
	? (createMockClient() as any)
	: createClient(supabaseUrl, supabaseKey);

export default supabase;
