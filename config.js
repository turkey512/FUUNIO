/* ============================================================
   config.js - Supabase 配置
   ============================================================ */

const SUPABASE_URL = 'https://ikaiezfbgcfijqewvxig.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlrYWllemZiZ2NmaWpxZXd2eGlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIyNjAyNTIsImV4cCI6MjA5NzgzNjI1Mn0.490rDguTYJCcLINwyMmvIMFjmMlWg6fVHyDLo18kPyQ';

const supabaseClient = window.supabase?.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
const isSupabaseReady = Boolean(supabaseClient);

const ADMIN_EMAIL = 'octopus1431@qq.com';

if (!isSupabaseReady) {
    console.warn('⚠️ Supabase SDK 未加载或配置错误');
}

