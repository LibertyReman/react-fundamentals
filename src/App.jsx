import {useState, useEffect} from "react"
import './App.css'
import Button from './components/Button/Button'
import Display from './components/Display/Display'

function App() {
  // 状態を持たせたい変数とそれを更新する関数を定義
  // 状態は親から子コンポーネントに渡すのが基本設計親
  const [count, setCount] = useState(0);

  // 関数を定義
  const handleClick = () => {
    setCount(count + 1);
  }

  // useEffectは関数内かつreturnの前に定義
  // 第1引数にコールバック関数、第2引数に配列を指定（空の場合はコンポーネントが初回表示されたときだけ実行）
  // countが変更されたときだけ実行
  //useEffect(()=>{
  //  console.log(count);
  //  if(count > 15) {
  //    setCount(0);
  //  }
  //}, [count])

  return (
    // 空のフラグメント returnの中で複数のタグを書きたい場合に必要
    <>
      <h1>Hello world</h1>
      {/* 値の場合は{}が必要 */}
      <Button type="submit" disabled={false} onClick={handleClick}>
        ボタン
      </Button>
      <Display count={count} />
    </>
  )
}

export default App
