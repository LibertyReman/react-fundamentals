import styles from "./Button.module.css";
import {useState} from "react"

// 親コンポーネントから子コンポーネントへ値を渡す仕組み
// 属性や子要素、イベントなどを親コンポーネントから渡せる
function Button(props) {

  // 状態を持たせたい変数とそれを更新する関数を定義
  const [count, setCount] = useState(0);

  // children：コンポーネントの中身に書いた要素やテキストを受け取る
  const {type, disabled} = props;

  // 関数を定義
  const handleClick = () => {
    setCount(count + 1);
  }

  // returnの中でHTMLを書く
  return (
    // iやspanタグはbuttonの子要素のため空のフラグメントは不要
    <button className={styles.buttonInner} type={type} disabled={disabled} onClick={handleClick}>
      カウント：{count}
    </button>
  )
}

export default Button;
