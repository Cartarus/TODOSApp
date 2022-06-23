import React from "react";
import "./TodosLoading.css";
import { AiOutlineClose } from "react-icons/ai"; 
import { AiOutlineCheck } from "react-icons/ai"; 


function TodosLoading() {
  return (
    <div className="LoadingTodo-container">
      <div className="divTarjet">
        <AiOutlineCheck className="LoadingTodo-completeIcon">✓</AiOutlineCheck>
        <p className="LoadingTodo-Text">Cargando Todos</p>
      </div>
      <AiOutlineClose size={25} className="LoadingTodo-deleteIcon "></AiOutlineClose>
    </div>
  );
}

export { TodosLoading };
