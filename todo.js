const todo_input = document.getElementById("todo_input");
const add_btn = document.getElementById("add_btn");
const todos_container = document.getElementById("todos_container");
const all_d = document.getElementById("all_del");
add_btn.addEventListener("click", () => {
  // Dom elementlarimiz
  const text = document.createElement("p");

  const todo_card = document.createElement("div");

  const todo_card_btns = document.createElement("div");

  const todo_card_check_txt = document.createElement("div");

  const edit_b = document.createElement("img");

  const del_b = document.createElement("img");

  const check_btn = document.createElement("input");

  //   Class va typlaar

  edit_b.src = "./imgs/edit.png";

  del_b.src = "./imgs/delete.png";

  text.className = "todo_text";

  todo_card.className = "todo_card";

  edit_b.className = "edit_b";

  del_b.className = "del_b";

  check_btn.setAttribute("type", "checkbox");

  todo_card_check_txt.className = "check_box";

  check_btn.className = "check";

  todo_card_btns.className = "btns";

  //   Shart agar input bush bulsa ogohlantirish

  if (todo_input.value === "") {
    alert("Iltimos Input ichiga malumot kiriting!");
  } else {
    todos_container.append(todo_card);

    text.innerText = todo_input.value;
    todo_card_check_txt.append(check_btn, text);

    todo_card.append(todo_card_check_txt, todo_card_btns);
    todo_card_btns.append(edit_b, del_b);
  }

  edit_b.addEventListener("click", () => {
    const text_edt = text;

    const old_text = text_edt.innerText;

    const new_text = prompt("Yangi matn kiriting", old_text);

    if (new_text !== null && new_text.trim() !== "") {
      text_edt.innerText = new_text;
    }
  });

  del_b.addEventListener("click", () => {
    todo_card.remove();
  });

  check_btn.addEventListener("change", () => {
    if (check_btn.checked) {
      text.style.textDecoration = "line-through";
      edit_b.style.pointerEvents = "none";
      edit_b.style.opacity = "0.5";
    } else {
      text.style.textDecoration = "none";
      edit_b.style.pointerEvents = "auto";
      edit_b.style.opacity = "1";
    }
  });

  todo_input.value = "";
});

// Hamma todolarni uchiradi
all_d.addEventListener("click", () => {
  todos_container.innerHTML = "";
});
