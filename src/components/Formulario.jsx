

import { useForm } from "../hooks/useForm"




export const Formulario = ({añadirTarea}) => {
    
  const { formulario, handleChange } = useForm("");

  const onSubmit = (ev) => {

    ev.preventDefault();

    const newTodo = {

        id: Date.now(),
        titulo: formulario.titulo,
        description: formulario.description,
        done: false,
        date: new Date()
    }
      
    añadirTarea(newTodo)

  };

  

  return (
    <>
      

      <form onSubmit={onSubmit} className="center formulario">
        <input className="inputText"
          type="text"
          placeholder="titulo"
          name="titulo"
          onChange={handleChange}
        />
         <input className="inputText"
          type="textarea"
          placeholder="descripcion"
          name="description"
          onChange={handleChange}
        />
        <input className="inputSub" type="submit" value="Buscar" />

        
      </form>
    </>
  );
};