import { useTodoList } from "../hooks/useTodoList"
import { CardsTareas } from "./cardsTareas"



export const ListaTareas = ({titulo,description,id}) => {

  const {handleDeleteTodo} = useTodoList('')

  return (
    <>
    
      <table>

        <tr>
            <td>{titulo}</td>
            <td>{description}</td>
            <td><button >Complete</button></td> 
            <td><button onClick={()=> handleDeleteTodo(id) }>Delete</button></td> 
        </tr>
       

      </table>

    {/* <CardsTareas/> */}

    </>
  )
}
