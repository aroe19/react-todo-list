/*
    .js file that controls the display of todos and filtering
 */

//Imports
import React from "react";
import Todo from "./Todo"

//Function that controls the filtering and what todos are displayed to the UI
const TodoList = ({todos, setTodos, filteredTodos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo setTodos={setTodos} todos={todos} key={todo.id} text={todo.text} todo={todo}/>
                ))}
            </ul>
            
        </div>
    );

}; //End TodoList

export default TodoList;