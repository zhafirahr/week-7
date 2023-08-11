"use strict";
const btn = document.getElementById("btn"); //Type assertion
const input1 = document.getElementById("activity");
const input2 = document.getElementById("details");
const input3 = document.getElementById("amount");
const type1 = document.getElementById("type");
const form = document.querySelector("form");
const list = document.getElementById("financial_tracker_list");
const to_do_list = readTodos();
to_do_list.forEach(createTodo);
// Load todos from local storage
function readTodos() {
    const to_do_listJSON = localStorage.getItem("to_do_list");
    if (to_do_listJSON === null)
        return [];
    return JSON.parse(to_do_listJSON);
}
// Save todos to local storage
function saveTodos() {
    localStorage.setItem("to_do_list", JSON.stringify(to_do_list));
}
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
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
function createTodo(to_do_list) {
    const newLI = document.createElement("li");
    newLI.append(to_do_list.text0 + " " + " Berupa " + to_do_list.text1 + " " + " adalah " + to_do_list.text2 + " "
        + " sebesar Rp. " + " " + to_do_list.text3);
    list.append(newLI);
}
form.addEventListener("submit", handleSubmit);
