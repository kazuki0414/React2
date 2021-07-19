import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

//コンポーネント
//memo → 親コンポーネントが再レンダリングされてもpropsが変更ない場合はこのコンポーネントは再レンダリングしない
export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log("再レンダリングされました");

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
