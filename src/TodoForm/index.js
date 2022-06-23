import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";
function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (newTodoValue != "") {
      addTodo(newTodoValue);
      setOpenModal(false);
    }
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Agrega Un nuevo Todo</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="¿Que vas a hacer?"
      />
      <div className="TodoForm-ButtonContainer">
        <button
          className="TodoForm-Button  TodoForm-Button--Cancel"
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button className="TodoForm-Button TodoForm-Button--Add" type="submit">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
