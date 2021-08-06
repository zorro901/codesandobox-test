import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得して、初期化
  const inputText = document.getElementById("add-text").value; //テキストボックスの値を取得
  document.getElementById("add-text").value = ""; //値を初期化

  // li生成
  const li = document.createElement("li");
  li.className = "list-row";
  li.innerText = inputText;

  // div生成
  const div = document.createElement("div");
  li.appendChild(div);

  // button生成
  const button_complete = document.createElement("button");
  div.appendChild(button_complete);
  button_complete.innerText = "完了";
  // const button_remove = document.createElement("button");
  // div.appendChild(button_remove);
  // div.innerText = "削除";

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(li);

  console.log(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
