import { ADD_TODO, TOGGLE_TODO } from '../Actions';
import TodoList from '../Components/TodoList';

//Gabe's Master Work (id creator)
let idCounter = () => {
    let id = 0;
    return function countUp() {
        return id++
    }
}

const idUp = idCounter();

const initialState = {
    todos: [{text: 'First Todo!!!', completed: false, id: idUp()}]
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
    const newTodo = {
        text: action.payload,
        completed: false,
        id: idUp()
    }
      return {
        ...state,
          todos: [...state.todos, newTodo]
    }
    case TOGGLE_TODO:
      return {
          ...state,
          todos: state.todos.map((todo, index) => {
              if (index === action.payload) {
                  return {
                      ...todo,
                      completed: !todo.completed
                  };
              }
              return todo;
          })
      }; 
    default:
      return state
  }
}

export default reducer;