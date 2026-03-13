import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string || 'https://placeholder.supabase.co';
const supabaseAnonKey = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY) as string || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  }
});

// Clear stale sessions from old Vite app that cause "Invalid Refresh Token" errors
if (typeof window !== 'undefined') {
  supabase.auth.onAuthStateChange((event) => {
    if (event === 'SIGNED_OUT') {
      // Remove any stale auth keys from localStorage
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith('sb-')) localStorage.removeItem(key);
      });
    }
  });

  // On load, if token refresh fails, sign out silently
  supabase.auth.getSession().catch(() => {
    supabase.auth.signOut();
  });
}

