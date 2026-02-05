import { createClient } from '@supabase/supabase-js';

// We add "as string" to tell TypeScript: "Trust me, these are strings."
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);