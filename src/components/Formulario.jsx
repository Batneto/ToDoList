

import { useForm } from "../hooks/useForm"




export const Formulario = ({handleNewTodo}) => {
    
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
      
    handleNewTodo(newTodo)

  };

  return (
    <>
      <section className="sec-form">
      <form onSubmit={onSubmit} className="center formulario">

        <input className="i-form"
          type="text"
          placeholder="titulo"
          name="titulo"
          onChange={handleChange}
        />
        
         <textarea className="ta-form"
          type="textarea"
          placeholder="descripcion"
          name="description"
          onChange={handleChange}
        />
        <input className="s-form" type="submit" value="Buscar" />
      </form>

      </section>
    </>
  );
};