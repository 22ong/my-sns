export type FeedLoadStatus = 'first-loading' | 'loading-more' | 'idle' | 'end' | 'error'

type FeedStatusProps = {
  status: FeedLoadStatus
  onRetry: () => void
}

// 피드 아래 상태 상자. 모양은 prototype/feed.html 맨 아래 상태 3개 기준
function FeedStatus({ status, onRetry }: FeedStatusProps) {
  if (status === 'idle') return null

  return (
    <section className="states" aria-live="polite">
      {status === 'first-loading' && (
        <div className="state">
          <div className="spinner" />
          오늘의 조각을 모으는 중이에요
        </div>
      )}

      {status === 'loading-more' && (
        <div className="state">
          <div className="spinner" />
          조각을 더 가져오고 있어요
        </div>
      )}

      {status === 'end' && (
        <div className="state">
          <div className="end-line">
            <span className="end-mark">✦</span>
          </div>
          모든 조각을 다 봤어요
        </div>
      )}

      {status === 'error' && (
        <div className="state error">
          <span>
            조각을 불러오지 못했어요.
            <br />
            다시 시도해 주세요
          </span>
          <button className="retry" type="button" onClick={onRetry}>
            다시 시도
          </button>
        </div>
      )}
    </section>
  )
}

export default FeedStatus
