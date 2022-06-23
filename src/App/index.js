//import logo from './logo.svg';
import "./App.css";
import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";

const defaultTodos = [
  { text: "Jugar valorant", completed: true },
  { text: "Jugar Wow", completed: false },
  { text: "Jugar Lol", completed: true },
  { text: "Jugar Lolsito", completed: false },
];



function App() {
  
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
