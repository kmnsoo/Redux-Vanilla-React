import {createStore} from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.getElementById("num");



//reducer는 data를 modify한다. reducer는 함수여야한다.  ex) add, minus
const reducer = (count = 0, action) => {
  if (action.type ==="ADD"){
    return count +1 ;
  } else if(action.type ==="MINUS"){
    return count -1;
  } else{
  return count;
  }
};


//data가 저장되는 곳 -> store
const store = createStore(reducer);

//dispatch를 통해 action을 호출하고, dispatch 내부 인자는 object여만 한다.
store.dispatch({ type: "ADD"} );
store.dispatch({ type: "ADD"} );
store.dispatch({ type: "ADD"} );
store.dispatch({ type: "MINUS"} );

console.log(store.getState());

