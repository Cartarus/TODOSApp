import React from "react";
import "./TodoItem.css";
import { AiOutlineClose } from "react-icons/ai"; 
import { AiOutlineCheck } from "react-icons/ai"; 

function TodoItem(props) {
 

  return (
    <li >
      <div className="divTarjet">
        
        <AiOutlineCheck
        className={`Icon Icon-check ${
          props.completed && "Icon-check--active"
        }`}
        onClick={props.onComplete}/>
        

        <p
          className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}
        >
          {props.text}
        </p>
        
      </div>

      <AiOutlineClose size={25} className="Icon Icon-delete" onClick={props.onDelete}/>
    </li>
  );
}

export { TodoItem };
