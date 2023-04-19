import { useReducer } from "react";
import {todoReducer} from '../reducer/todoreducer'
import{init} from '../reducer/init'


export const useTodoList = () => {

    let [todos, dispatch] = useReducer(todoReducer, [], init);


    const handleNewTodo = (newTodo) => {
       
        const action = {
            type: 'add todo',
            payload: newTodo
        }

    dispatch(action) 
    }


    const handleDeleteTodo = (id) => {

        const action = {
            type: 'delete todo',
            payload: id
        } 

        dispatch(action)
       
      
    }

    const handleToggleTodo = (id) => {
       
        const action = {
            
            type: 'toggle todo',
            payload: id

        } 

        dispatch(action)
    }


    return {
        todos,
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo
    }
}