import {useState, useEffect} from "react"
import { Link } from "react-router-dom";
import Button from '../components/Button/Button'
import Display from '../components/Display/Display'

function Home(){
  // 状態を持たせたい変数とそれを更新する関数を定義
  // 状態は親から子コンポーネントに渡すのが基本設計親
  const [count, setCount] = useState(0);

  // 関数を定義
  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <>
      <h1>Home</h1>
      <Link to="/sample-page">Go to Sample Page</Link>
      <br />
      <br />
      {/* 値の場合は{}が必要 */}
      <Button type="submit" disabled={false} onClick={handleClick}>
        ボタン
      </Button>
      <Display count={count} />
    </>
  )
}

export default Home;
