function Button() {
  // 関数を定義
  const handleClick = () => {
    alert('クリックされました');
  }

  // returnの中でHTMLを書く
  return (
    // iやspanタグはbuttonの子要素のため空のフラグメントは不要
    <button type="button" onClick={handleClick}>
      <i>icon</i>
      <span>クリック</span>
    </button>
  )
}

export default Button;
