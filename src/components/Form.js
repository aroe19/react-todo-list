/*
    .js file that controls the input component and the filter selection menu.
 */

//Imports
import React from "react";

//Form function
const Form = ({setInputText, setTodos, todos, inputText, setStatus}) => {
    
    //Function that handles the input text as it is input to the text box
    const inputTextHandler = (e) => {
        //input text is the input from the text box
        setInputText(e.target.value);
    };


    //Function that creates todo from input text after submit is clicked
    const submitTodoHandler = (e) => {
        e.preventDefault();
        //A todo is an array comprised of the input text, completed status and random ID
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random()*1000}
        ]);
        //Refresh input box to get rid of the previous input
        setInputText("");
    };


    //Function that handles the status of the todo
    const statusHandler = (e) => {
        setStatus(e.target.value);
    };

    
    /*
        Displaying the form and related data
            - input: value = input text, when inputting data, inputTextHandler creates input text
            - button: when clicked call submitTodoHandler to create a todo
            - div select: filters the todos by status, using statusHandler to update status'
    */
    return(
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input"/>
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i> + </i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};  //End Form

export default Form;