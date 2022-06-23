import React from "react";
import "./CreateTodoButton.css"
import imagen from "../assets/anadir.png"



function CreateTodoButton(props) {
    const onClickButtonn= ()=>{
        props.setOpenModal(!props.openModal);
    } 

    return(
        <button className="CreateTodoButton"
        onClick={()=> onClickButtonn()}
        >
            +
        </button>
    );

}

export {CreateTodoButton}