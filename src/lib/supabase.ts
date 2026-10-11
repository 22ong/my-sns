import { createClient } from '@supabase/supabase-js'

// 값은 .env.local 에서만 읽음 (publishable 키만 사용)
const supabaseUrl: string | undefined = import.meta.env.VITE_SUPABASE_URL
const supabaseKey: string | undefined = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('.env.local 에 VITE_SUPABASE_URL 과 VITE_SUPABASE_PUBLISHABLE_KEY 를 넣어 주세요')
}

export const supabase = createClient(supabaseUrl, supabaseKey)
