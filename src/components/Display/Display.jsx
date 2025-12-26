import {useState, useEffect} from "react"

function Display(props){

  const [text, setText] = useState("Loading...");

  // useEffectは関数内かつreturnの前に定義
  // 第1引数にコールバック関数、第2引数に配列を指定（空の場合はコンポーネントが初回表示されたときだけ実行）
  // サーバからデータ表示するのに時間がかかる場合に使ったりする
  useEffect(() => {
    setTimeout(() => {
      setText(`カウント：${props.count}`);
    }, 2000);
  },[])


  return (
    <div>
      {text}
    </div>
  )
}

export default Display

