interface Todo {
    text0: string;
    text1: string;
    text2: string;
    text3: string;
    completed: boolean;
  }

  const btn = document.getElementById("btn")! as HTMLButtonElement; //Type assertion
  const input1 = document.getElementById("activity")! as HTMLInputElement;
  const input2 = document.getElementById("details")! as HTMLInputElement;
  const input3 = document.getElementById("amount")! as HTMLInputElement;
  const type1 = document.getElementById("type")! as HTMLInputElement;
  const form = document.querySelector("form")!;
  const list = document.getElementById("financial_tracker_list")!;

  const to_do_list: Todo[] = readTodos();
  to_do_list.forEach(createTodo);

  // Load todos from local storage
  function readTodos(): Todo[] {
    const to_do_listJSON = localStorage.getItem("to_do_list");
    if (to_do_listJSON === null) return [];
    return JSON.parse(to_do_listJSON);
  }

  // Save todos to local storage
  function saveTodos() {
    localStorage.setItem("to_do_list", JSON.stringify(to_do_list));
  }

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    const newTodo: Todo = {
      text0: type1.value,
      text1: input1.value,
      text2: input2.value,
      text3: input3.value,
      completed: false,
    };
    createTodo(newTodo);
    to_do_list.push(newTodo);

    saveTodos();
    type1.value = "";
    input1.value = "";
    input2.value = "";
    input3.value = "";
  }

  function createTodo(to_do_list: Todo) {
    const newLI = document.createElement("li");
    newLI.append( to_do_list.text0 + " " + " Berupa "+ to_do_list.text1 + " " + " adalah "+to_do_list.text2 + " "
    + " sebesar Rp. " + " " + to_do_list.text3);
    list.append(newLI);
  }

  form.addEventListener("submit", handleSubmit);
