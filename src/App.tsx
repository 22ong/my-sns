import Feed from './components/Feed'
import './App.css'

function App() {
  return (
    <main className="phone">
      <header className="header">
        <h1>
          하루조각<span>.</span>
        </h1>
        <p>사진 한 장으로 남기는 오늘의 조각</p>
      </header>

      <Feed />
    </main>
  )
}

export default App
