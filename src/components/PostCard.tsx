import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import type { Post } from '../data/samplePosts'

type PostCardProps = {
  post: Post
}

type PostPhotosProps = {
  images: string[]
  author: string
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

// 사진 1장: 사진만 / 여러 장: 캐러셀 + 장수 배지 + 점
function PostPhotos({ images, author }: PostPhotosProps) {
  const [current, setCurrent] = useState(0)

  if (images.length === 1) {
    return (
      <div className="photo-wrap">
        <img src={images[0]} alt={`${author}님의 사진`} loading="lazy" />
      </div>
    )
  }

  return (
    <div>
      <div className="photo-wrap">
        <Swiper grabCursor onSlideChange={(swiper) => setCurrent(swiper.activeIndex)}>
          {images.map((src, i) => (
            <SwiperSlide key={src}>
              <img
                src={src}
                alt={`${author}님의 사진 ${i + 1}/${images.length}`}
                loading="lazy"
                draggable={false}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <span className="count-badge">
          {current + 1}/{images.length}
        </span>
      </div>
      <div className="dots">
        {images.map((src, i) => (
          <span key={src} className={i === current ? 'dot active' : 'dot'} />
        ))}
      </div>
    </div>
  )
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

      <PostPhotos images={post.images} author={post.author} />

      <p className="content">{post.content}</p>
    </article>
  )
}

export default PostCard
