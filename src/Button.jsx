// 親コンポーネントから子コンポーネントへ値を渡す仕組み
// 属性や子要素、イベントなどを親コンポーネントから渡せる
function Button(props) {

  // children：コンポーネントの中身に書いた要素やテキストを受け取る
  const {type, disabled, children, onClick} = props;

  // 関数を定義

  // returnの中でHTMLを書く
  return (
    // iやspanタグはbuttonの子要素のため空のフラグメントは不要
    <button type={type} disabled={disabled} onClick={onClick}>
      <i>icon</i>
      {children}
    </button>
  )
}

export default Button;
