import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得して、初期化
  const inputText = document.getElementById("add-text").value; //テキストボックスの値を取得
  document.getElementById("add-text").value = ""; //値を初期化
  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了のリストに追加する関数
const createIncompleteList = (inputText) => {
  // li生成
  const li = document.createElement("li");
  li.className = "list-row";

  // p生成
  const p = document.createElement("p");
  p.innerText = inputText;

  // div生成
  const div = document.createElement("div");
  li.appendChild(div);

  // button（削除）生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグを未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentElement.parentNode);
  });

  // button（完了）生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグを完了リストから削除
    deleteFromIncompleteList(deleteButton.parentElement.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentElement.parentNode;

    // TODO内のテキストを取得
    completeButton.textContent = null; // ボタン内の文字をnullへ
    deleteButton.textContent = null; // ボタン内の文字をnullへ
    const text = addTarget.firstElementChild.parentElement.innerText;

    // div以下を初期化
    addTarget.textContent = null;

    // p生成
    const p = document.createElement("p");
    p.innerText = text;

    // button（戻す）生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグ（div）を完了リストから削除
      const deleteTarget = backButton.parentElement.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      backButton.textContent = null; //戻すボタンの文字列をnullへ
      const text = deleteTarget.firstElementChild.parentElement.innerText;
      console.log(text);
      createIncompleteList(text);
    });

    // div生成
    const div = document.createElement("div");
    addTarget.appendChild(div);
    div.appendChild(p);
    div.appendChild(backButton);

    // liタグに要素に各要素を設定
    addTarget.appendChild(div);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(li);

  // divタグの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
