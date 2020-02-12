const input = document.getElementById("inputTodo");
const div = document.getElementById("todo");
const addButton = document.getElementById("addTodo");

let todos = [];

renderTodos = () => {
  div.innerHTML = "";

  for (todo of todos) {
    const subDiv = document.createElement("div");
    const p = document.createElement("p");
    const text = document.createTextNode(todo.text);

    const deleteTodoBtn = document.createElement("button");

    p.appendChild(text);
    subDiv.appendChild(p);
    div.appendChild(subDiv);
  }
};

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

addButton.onclick = addTodo;
