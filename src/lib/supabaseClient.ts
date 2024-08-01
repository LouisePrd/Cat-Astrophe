import { createClient } from '@supabase/supabase-js'

declare global {
  interface ImportMeta {
	readonly env: {
	  readonly VITE_SUPABASE_URL: string;
	  readonly VITE_SUPABASE_ANON_KEY: string;
	};
  }
}

let url = import.meta.env.VITE_SUPABASE_URL
let key = import.meta.env.VITE_SUPABASE_ANON_KEY
export const supabase = createClient(url, key)