import styles from "./Button.module.css";

// 親コンポーネントから子コンポーネントへ値を渡す仕組み
// 属性や子要素、イベントなどを親コンポーネントから渡せる
function Button(props) {
  // propsで親から子コンポーネントへ値を渡す
  const {type, disabled, onClick, children} = props;

  // 関数を定義

  // returnの中でHTMLを書く
  return (
    // iやspanタグはbuttonの子要素のため空のフラグメントは不要
    <button className={styles.buttonInner} type={type} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button;
