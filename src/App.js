import React, {useState, useEffect} from "react";
//import logo from './logo.svg';
import './App.css';
//importing components
import Form from './components/Form';
import ToDoList from './components/TodoList';
//import Todo from './components/Todo';

function App() {
  
  //States
  const[inputText, setInputText] = useState("");
  const[todos, setTodos] = useState([]);
  const[status, setStatus] = useState('all');
  const[filteredTodos, setFilteredTodos] = useState([]);
 
  //run once when the app starts
  useEffect(() => {
    getLocalTodos();
  }, []);

  //Use Effect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);
 
  //Functions
  const filterHandler = () => {
    switch(status){
      case 'completed' :
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted' :
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  //Save to local storage
  const saveLocalTodos = () => {
    if(todos.length > 0){
      localStorage.setItem("todos", JSON.stringify(todos));
    } 
  };

  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
      <h1>To Do List</h1>
      </header>
      <Form 
        todos={todos} 
        setTodos={setTodos} 
        inputText={inputText} 
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <ToDoList 
        setTodos={setTodos} 
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
