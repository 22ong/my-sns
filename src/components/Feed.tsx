import { useCallback, useEffect, useRef, useState } from 'react'
import type { Post } from '../data/samplePosts'
import { fetchPosts } from '../data/fetchPosts'
import PostCard from './PostCard'
import FeedStatus from './FeedStatus'
import type { FeedLoadStatus } from './FeedStatus'

const PAGE_SIZE = 10

function Feed() {
  const [posts, setPosts] = useState<Post[]>([])
  const [status, setStatus] = useState<FeedLoadStatus>('first-loading')

  // 불러오는 중이면 true. state 는 늦게 반영될 수 있어서 ref 로 중복 요청을 막음
  const isLoadingRef = useRef(false)
  // 다음에 가져올 위치 (지금까지 받은 게시물 수)
  const offsetRef = useRef(0)
  const sentinelRef = useRef<HTMLDivElement>(null)

  const loadMore = useCallback(async () => {
    if (isLoadingRef.current) return
    isLoadingRef.current = true

    const offset = offsetRef.current
    setStatus(offset === 0 ? 'first-loading' : 'loading-more')

    try {
      const result = await fetchPosts(offset, PAGE_SIZE)
      offsetRef.current = offset + result.posts.length
      setPosts((prev) => [...prev, ...result.posts])
      setStatus(result.hasMore ? 'idle' : 'end')
    } catch {
      setStatus('error')
    } finally {
      isLoadingRef.current = false
    }
  }, [])

  // 처음 10개
  useEffect(() => {
    void loadMore()
  }, [loadMore])

  // 목록 끝 div 가 화면에 들어오면 다음 10개. 기다리는 중(idle)일 때만 지켜봄
  useEffect(() => {
    if (status !== 'idle') return
    const target = sentinelRef.current
    if (!target) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) void loadMore()
      },
      { rootMargin: '0px 0px 100px 0px' },
    )
    observer.observe(target)
    return () => observer.disconnect()
  }, [status, loadMore])

  return (
    <>
      <section className="feed">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>
      <div ref={sentinelRef} className="feed-sentinel" aria-hidden="true" />
      <FeedStatus status={status} onRetry={() => void loadMore()} />
    </>
  )
}

export default Feed
