/*
    .js file that controls the todo objects
*/

//Imports
import React from "react";


//Function which controls the display, delete and status of a todo
const Todo = ({text, todo, todos, setTodos}) => {
    
    //Function that deletes a todo from the list
    const deleteHandler = () => {
        //deletes the selected element if the ID of the element matches ID of todo
        setTodos(todos.filter((el) => el.id !== todo.id));
    };

    //Function that handles the completed status of a todo
    const completeHandler = () => {
        //select the item
        setTodos(todos.map((item) => {
            //if the item has the same id as todo
            if(item.id === todo.id) {
                //change status (can be toggled)
                return {
                    ...item, completed: !item.completed
                };
            }
            //return the update
            return item;
            })
        );
    };

    /*
        Display todo in a list with complete and delete buttons and functionality
        - li: show todo text
        - complete button: changes status to complete (or uncomplete)
        - delete button: deletes the todo item
    */
    return(
        <div className ="todo">
            <li className ={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i>✓</i>
            </button>
            <button onClick={deleteHandler} className="delete-btn">
                <i>X</i>
            </button>
        </div>
    );
    
}; //End Todo

export default Todo;