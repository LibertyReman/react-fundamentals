import './App.css'
import Button from './Button'

function App() {
  // 関数を定義
  const handleClick = () => {
    alert('クリックされました');
  }

  return (
    // 空のフラグメント returnの中で複数のタグを書きたい場合に必要
    <>
      <h1>Hello world</h1>
      {/* 値の場合は{}が必要 */}
      <Button type="submit" disabled={false} onClick={handleClick}>
        <span>ボタンクリック</span>
      </Button>
    </>
  )
}

export default App
