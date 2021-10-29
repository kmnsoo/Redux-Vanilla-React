import {createStore} from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.getElementById("num");



//reducer는 함수여야한다. data를 modify한다. ex) add, minus
const reducer = (state = 0) => {
  return state;
};


//data가 저장되는 곳 -> store
const store = createStore(reducer);

