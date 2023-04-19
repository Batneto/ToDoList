export const setLocal = (array) => {
    localStorage.setItem("tareas", JSON.stringify(array));
  };