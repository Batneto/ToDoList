import  { useEffect, useState } from 'react'
import { Formulario } from './Formulario'
import { ListaTareas } from './ListaTareas'
import{setLocal} from '../helper/setLocal'
import{useTodoList} from '../hooks/useTodoList'


export const Container = () => {


    const {todos, handleNewTodo}= useTodoList() 


    useEffect(()=>{

        setLocal(todos)

    })

    console.log(todos);

  return (
    <>

    <header>
        <h1>Practica TODOList</h1>
    </header>


    <h3>Añadir taera</h3>

    <Formulario  añadirTarea= {handleNewTodo} />
    
   {todos.map((item)=>(
     <ListaTareas key={item.id} {...item}  />
   ))
   

   }
    

    </>
  )
}
