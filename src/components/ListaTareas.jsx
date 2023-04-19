


export const ListaTareas = ({handleToggleTodo,handleDeleteTodo,titulo,description,id,done}) => {


  return (
    <>
    
      

      <tbody>

        <tr>

            <td  className={ (done===false) ? 'noCompletado titulo ':'completado titulo color-gray'}> <span className="strong">{titulo}</span> -{description}</td>
            
            {/* <td className={(done===false) ? 'noCompletado decripcion':'completado decripcion color-gray'}></td> */}

        <td className="botones">
            {
              done==false && <button className="bg-green boton" onClick={()=>{handleToggleTodo (id)}}>Pendiente</button>
             }

            {
              done==true && <button className="bg-black boton " onClick={()=> {handleToggleTodo (id) }}>Finalizado</button>
             }

            <button className="bg-red boton" onClick={()=> handleDeleteTodo(id) }>Eliminar</button>   
        </td>

        </tr>
       </tbody>

      

    {/* <CardsTareas/> */}

    </>
  )
}
