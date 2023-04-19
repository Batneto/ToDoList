import { useState } from "react";

export const useForm = (estadoInicial = "") => {
  
  const [formulario, setFormulario] = useState({ titulo: estadoInicial });
  

  const handleChange = (ev) => {

    const { name, value } = ev.target;
    

    setFormulario({
      ...formulario,
      [name]: value,
    });

  };

  

  return { formulario, handleChange };
};