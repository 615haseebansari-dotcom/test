// Supabase client configuration
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Validate Supabase URL format
export function validateSupabaseUrl(url: string): boolean {
  const supabaseUrlPattern = /^https:\/\/[a-z0-9]+\.supabase\.co$/;
  return supabaseUrlPattern.test(url);
}

// Get the correct functions URL
export function getFunctionsUrl(): string {
  const baseUrl = import.meta.env.VITE_SUPABASE_URL;
  if (!baseUrl) {
    throw new Error('VITE_SUPABASE_URL is not defined');
  }
  
  // Use the correct functions URL format
  const projectRef = baseUrl.replace('https://', '').replace('.supabase.co', '');
  return `https://${projectRef}.functions.supabase.co/send-email`;
}