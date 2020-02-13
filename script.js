const input = document.getElementById("inputTodo");
const div = document.getElementById("todo");
const addButton = document.getElementById("addTodo");

let todos = [];

addTodo = () => {
  const text = input.value;

  if (text) {
    todos = [...todos, { text, id: Math.random() }];
    input.value = "";
    renderTodos();
  }
};

removeTodo = id => {
  const index = todos.findIndex(Todo => Todo.id === id);

  todos.splice(index, 1);

  renderTodos();
};

renderTodos = () => {
  div.innerHTML = "";

  for (todo of todos) {
    const subDiv = document.createElement("div");
    subDiv.classList.add("todo-item");

    const p = document.createElement("strong");
    const text = document.createTextNode(todo.text);

    const deleteTodoBtn = document.createElement("button");
    deleteTodoBtn.innerText = "X";
    deleteTodoBtn.onclick = removeTodo

    p.appendChild(text);
    subDiv.appendChild(deleteTodoBtn);
    subDiv.appendChild(p);
    div.appendChild(subDiv);
  }
};




addButton.onclick = addTodo;
