import {useState, useEffect} from "react"

function Display(props){
  const [isLoading, setIsLoading] = useState(true);

  // useEffectは関数内かつreturnの前に定義
  // 第1引数にコールバック関数、第2引数に配列を指定（空の場合はコンポーネントが初回表示されたときだけ実行）
  // サーバからデータ表示するのに時間がかかる場合に使ったりする
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  },[])


  return (
    <div>
      {isLoading ? "Loading..." : `カウント：${props.count}`}
    </div>
  )
}

export default Display

