// window.addEventListener("load", () => {
//   todos = JSON.parse(localStorage.getItem("todos")) || [];
//   const nameInput = document.querySelector("#name");
//   const newTodoForm = document.querySelector("#new-todo-form");

//   const username = localStorage.getItem("username") || "";

//   nameInput.value = username;

//   nameInput.addEventListener("change", (e) => {
//     localStorage.setItem("username", e.target.value);
//   });

//   newTodoForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const todo = {
//       content: e.target.elements.content.value,
//       category: e.target.elements.category.value,
//       done: false,
//       createdAt: new Date().getTime(),
//     };

//     todos.push(todo);

//     localStorage.setItem("todos", JSON.stringify(todos));

//     e.target.reset();

//     DisplayTodos();
//   });
//   DisplayTodos();
// });

// function DisplayTodos() {
//   const todoList = document.querySelector("#todo-list");

//   todoList.innerHTML = "";

//   todos.forEach((todo) => {
//     const todoItem = document.createElement("div");
//     todoItem.classList.add("todo-item");

//     const label = document.createElement("label");
//     const input = document.createElement("input");
//     const span = document.createElement("span");
//     const content = document.createElement("div");
//     const actions = document.createElement("div");
//     const edit = document.createElement("button");
//     const deleteButton = document.createElement("button");

//     input.type = "checkbox";
//     input.checked = todo.done;
//     span.classList.add("bubble");

//     if (todo.category == "personal") {
//       span.classList.add("personal");
//     } else {
//       span.classList.add("business");
//     }

//     content.classList.add("todo-content");
//     actions.classList.add("actions");
//     edit.classList.add("edit");
//     deleteButton.classList.add("delete");
//     deleteButton.onclick =
//       "confirm('Are you sure you want to delete this item')";

//     content.innerHTML = `<input type="text" value="${todo.content}" readonly>`;
//     edit.innerHTML = "Edit";
//     deleteButton.innerHTML = "Delete";

//     label.appendChild(input);
//     label.appendChild(span);
//     actions.appendChild(edit);
//     actions.appendChild(deleteButton);
//     todoItem.appendChild(label);
//     todoItem.appendChild(content);
//     todoItem.appendChild(actions);

//     todoList.appendChild(todoItem);

//     if (todo.done) {
//       todoItem.classList.add("done");
//     }

//     input.addEventListener("click", (e) => {
//       todo.done = e.target.checked;
//       localStorage.setItem("todos", JSON.stringify(todos));

//       if (todo.done) {
//         todoItem.classList.add("done");
//       } else {
//         todoItem.classList.remove("done");
//       }

//       DisplayTodos();
//     });

//     edit.addEventListener("click", (e) => {
//       const input = content.querySelector("input");
//       const end = input.value.length;
//       input.removeAttribute("readonly");
//       edit.innerHTML = "Save";
//       input.setSelectionRange(end, end);
//       input.focus();
//       // input.select();
//       input.addEventListener("blur", (e) => {
//         input.setAttribute("readonly", true);
//         todo.content = e.target.value;
//         localStorage.setItem("todos", JSON.stringify(todos));
//         DisplayTodos();
//       });
//     });

//     deleteButton.addEventListener("click", (e) => {
//       // Exibe uma caixa de diálogo de confirmação
//       const confirmation = confirm(
//         "Are you sure you want to delete this task?"
//       );

//       if (confirmation) {
//         todos = todos.filter((t) => t !== todo);
//         localStorage.setItem("todos", JSON.stringify(todos));
//         DisplayTodos();
//       }
//     });
//   });
// }

window.addEventListener("load", () => {
  todos = JSON.parse(localStorage.getItem("todos")) || [];
  const nameInput = document.querySelector("#name");
  const newTodoForm = document.querySelector("#new-todo-form");

  const username = localStorage.getItem("username") || "";

  nameInput.value = username;

  nameInput.addEventListener("change", (e) => {
    localStorage.setItem("username", e.target.value);
  });

  newTodoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const todo = {
      content: e.target.elements.content.value,
      category: e.target.elements.category.value,
      done: false,
      createdAt: new Date().getTime(),
    };

    todos.push(todo);

    localStorage.setItem("todos", JSON.stringify(todos));

    e.target.reset();

    DisplayTodos();
  });
  DisplayTodos();
});

function DisplayTodos() {
  const todoList = document.querySelector("#todo-list");

  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");
    todoItem.draggable = true;
    todoItem.setAttribute("data-index", index);

    const label = document.createElement("label");
    const input = document.createElement("input");
    const span = document.createElement("span");
    const content = document.createElement("div");
    const actions = document.createElement("div");
    const edit = document.createElement("button");
    const deleteButton = document.createElement("button");

    input.type = "checkbox";
    input.checked = todo.done;
    span.classList.add("bubble");

    if (todo.category == "personal") {
      span.classList.add("personal");
    } else {
      span.classList.add("business");
    }

    content.classList.add("todo-content");
    actions.classList.add("actions");
    edit.classList.add("edit");
    deleteButton.classList.add("delete");
    deleteButton.onclick =
      "confirm('Are you sure you want to delete this item')";

    content.innerHTML = `<input type="text" value="${todo.content}" readonly>`;
    edit.innerHTML = "Edit";
    deleteButton.innerHTML = "Delete";

    label.appendChild(input);
    label.appendChild(span);
    actions.appendChild(edit);
    actions.appendChild(deleteButton);
    todoItem.appendChild(label);
    todoItem.appendChild(content);
    todoItem.appendChild(actions);

    todoList.appendChild(todoItem);

    if (todo.done) {
      todoItem.classList.add("done");
    }

    input.addEventListener("click", (e) => {
      todo.done = e.target.checked;
      localStorage.setItem("todos", JSON.stringify(todos));

      if (todo.done) {
        todoItem.classList.add("done");
      } else {
        todoItem.classList.remove("done");
      }

      DisplayTodos();
    });

    edit.addEventListener("click", (e) => {
      const input = content.querySelector("input");
      const end = input.value.length;
      input.removeAttribute("readonly");
      edit.innerHTML = "Save";
      input.setSelectionRange(end, end);
      input.focus();
      // input.select();
      input.addEventListener("blur", (e) => {
        input.setAttribute("readonly", true);
        todo.content = e.target.value;
        localStorage.setItem("todos", JSON.stringify(todos));
        DisplayTodos();
      });
    });

    deleteButton.addEventListener("click", (e) => {
      // Exibe uma caixa de diálogo de confirmação
      const confirmation = confirm(
        "Are you sure you want to delete this task?"
      );

      if (confirmation) {
        todos = todos.filter((t) => t !== todo);
        localStorage.setItem("todos", JSON.stringify(todos));
        DisplayTodos();
      }
    });

    todoItem.addEventListener("dragstart", dragStart);
    todoItem.addEventListener("dragover", dragOver);
    todoItem.addEventListener("drop", drop);
  });
}

let dragSrcElement = null;

function dragStart(e) {
  dragSrcElement = this;
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/html", this.innerHTML);
}

function dragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  e.dataTransfer.dropEffect = "move";
  return false;
}

function drop(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  }
  if (dragSrcElement !== this) {
    dragSrcElement.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData("text/html");
    updateTodoOrder();
  }
  return false;
}

function updateTodoOrder() {
  const todoList = document.querySelector("#todo-list");
  const todoItems = todoList.querySelectorAll(".todo-item");

  todos = Array.from(todoItems).map((todoItem, index) => {
    const todoIndex = parseInt(todoItem.getAttribute("data-index"));
    return todos[todoIndex];
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}
