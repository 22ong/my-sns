import { supabase } from '../lib/supabase'
import type { Post } from './samplePosts'

export type FetchPostsResult = {
  posts: Post[]
  hasMore: boolean
}

// 다음 묶음 가져오기. Supabase 의 sns_posts 에서 최신순으로 limit 개씩
export async function fetchPosts(offset: number, limit = 10): Promise<FetchPostsResult> {
  const { data, error } = await supabase
    .from('sns_posts')
    .select('id, author, content, images, created_at')
    .order('created_at', { ascending: false })
    .order('id', { ascending: false })
    .range(offset, offset + limit - 1)

  if (error) throw error

  const posts: Post[] = data ?? []
  // 받아 온 개수가 limit 보다 적으면 더 없음
  return {
    posts,
    hasMore: posts.length === limit,
  }
}
