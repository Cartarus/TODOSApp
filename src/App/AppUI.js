import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter/index.js";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal/index.js";
import { TodoForm } from "../TodoForm/index.js";
import {TodosError} from "../TodosError/index.js"
import {TodosLoading} from "../TodosLoading/index.js"
import {EmptyTodos} from "../EmptyTodos/index.js"

function AppUI() {
  const { error, loading, searchedTodos, completeTodo, deleteTodo,openModal,setOpenModal } =
    React.useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <TodosError error={error}/>}
        {loading && <TodosLoading/>}
        {!loading && !searchedTodos.length && <EmptyTodos/>}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          ></TodoItem>
        ))}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm></TodoForm>
         
        </Modal>
      )}

      <CreateTodoButton 
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUI };
