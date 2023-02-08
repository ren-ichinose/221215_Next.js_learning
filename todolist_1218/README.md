## 開発規則

###　開発時のlocalhostトに関する規則
http://localhost:3000/

###　エクスポートに関する規則
スニペットの都合上、コンポーネントのエクスポートについては、下記の通り運用する。
pagesファイル配下：default export
componentsフォルダ配下：default export

###　ファンクションコンポーネントに関する規則
ファンクションコンポーネントは下記の通り運用する。（スニペット：nafe）
const Sample = () => {
  return (
  );
}
export default Sample;

###　componentsフォルダ配下の構成に関する規則
componentsフォルダ配下については、下記構成にて運用する。
Atoms、Molecules、Organisms、Templeates、layout

###　使用するカラーに関数する規則
ベースカラー、メインカラー、アクセントカラー、ダークカラー（ブラック）、ボーダーカラーは、
変数を用いてグローバルCSSに定義し、下記の通り運用する。

  --Primary-dark-color: #333;
  --Primary-base-color: #f5f7fb;
  --Primary-main-color: #0f374df9;
  --Primary-accent-color: #f77c7c;
  --Primary-border-color: #e6e6e6;

###　propsに関する規則
原則変数に格納し、まとめた状態で渡す。
子コンポーネント側では、スプレット演算子を用いて、展開し使用する。

###　propsに関する子コンポーネントの規則
inputやbuttonなど、スタイリングが可変的な場合は、
原則、個別で指定せず、まとめて受け取る。

const Input = ({ inputProps }) => {
  return (
    <input
      {...inputProps}
    />
  );
};

###　CSSファイルに関する規則
グローバルなCSSはStylesフォルダに配置
コンポーネントやページに対するCSSファイルは、
JSCXファイルと同じフォルダに格納する。