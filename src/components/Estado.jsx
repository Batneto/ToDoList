import React, { useReducer } from 'react';

function todoReducer(state, action) {

  switch (action.type) {

    case 'ADD_TODO':
      return [...state, { task: action.payload, completed: false }];

    case 'TOGGLE_TODO':
      return state.map((todo, index) =>

        index === action.payload ? { ...todo, completed: !todo.completed } : todo
      );

    default:
      return state;
  }
}

 export function  Estado() {

  const [todos, dispatch] = useReducer(todoReducer, []);

  function handleSubmit(event) {

    event.preventDefault();

    const newTodo = event.target.elements.todo.value;

    dispatch({ type: 'ADD_TODO', payload: newTodo });

    event.target.reset();
  }

  function toggleTodo(index) {

    dispatch({ type: 'TOGGLE_TODO', payload: index });

  }

  return (

    <div>

      <form onSubmit={handleSubmit}>

        <input type="text" name="todo" placeholder="Add a todo" />

        <button type="submit">Add</button>

      </form>

      <ul>

        {todos.map((todo, index) => (

          <li key={index}>
            <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(index)} />
            
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.task}
            </span>
          </li>

        ))}

      </ul>

    </div>
  );
}