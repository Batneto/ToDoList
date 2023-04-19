import  { useEffect, useState } from 'react'
import { Formulario } from './Formulario'
import { ListaTareas } from './ListaTareas'
import{setLocal} from '../helper/setLocal'
import{useTodoList} from '../hooks/useTodoList'


export const Container = () => {


    const {todos, handleNewTodo,handleDeleteTodo,handleToggleTodo}= useTodoList() 


    useEffect(()=>{

        setLocal(todos)

    })

  

  return (
    <>

    <header className='ctr hdr wh'>
        <h1 className='title'>Practica TODOList</h1>
    </header>

    <div className="screen pad">

    <h3>Añadir Tarea</h3>

    <Formulario  añadirTarea= {handleNewTodo} />
    <h2>Tareas</h2>

    <table>
   {todos.map((item)=>(
      
     <ListaTareas handleToggleTodo={handleToggleTodo} handleDeleteTodo={handleDeleteTodo} key={item.id} {...item}  />
   ))
   

   }
   </table>
    </div>

    </>
  )
}
