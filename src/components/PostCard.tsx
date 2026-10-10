import type { Post } from '../data/samplePosts'

type PostCardProps = {
  post: Post
}

// 올린 시각을 "3시간 전" 처럼 바꿈. 일주일이 넘으면 날짜로 보여줌
function formatTime(iso: string): string {
  const minutes = (Date.now() - new Date(iso).getTime()) / 1000 / 60
  if (minutes < 1) return '방금 전'
  if (minutes < 60) return `${Math.floor(minutes)}분 전`
  if (minutes < 60 * 24) return `${Math.floor(minutes / 60)}시간 전`
  if (minutes < 60 * 24 * 7) return `${Math.floor(minutes / 60 / 24)}일 전`
  const d = new Date(iso)
  return `${d.getFullYear()}.${d.getMonth() + 1}.${d.getDate()}`
}

function PostCard({ post }: PostCardProps) {
  return (
    <article className="card">
      <div className="card-head">
        <div className="avatar">{post.author.slice(0, 1)}</div>
        <div className="who">
          <div className="author">{post.author}</div>
          <div className="time">
            <time dateTime={post.created_at}>{formatTime(post.created_at)}</time>
          </div>
        </div>
        <button className="more" type="button" aria-label="더 보기 메뉴">
          ···
        </button>
      </div>

      <div className="photo-wrap">
        <img src={post.images[0]} alt={`${post.author}님의 사진`} loading="lazy" />
      </div>

      <p className="content">{post.content}</p>
    </article>
  )
}

export default PostCard
