import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoLists from './components/TodoLists';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('All');
  const [filterTodos, setFilterTodos] = useState([]);

  useEffect(() => {
    filterHandler();
  },[status, todos])

  const filterHandler = () => {
    switch(status){
      case 'Completed':
        setFilterTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'Uncompleted':
        setFilterTodos(todos.filter(todo => todo.completed === false));
        break; 
      default:
        setFilterTodos(todos);
        break;
    }
  }
  return (
    <div className="App">
      <header className="header">
        <h1>Todos</h1>
        <Form 
          todos={todos} 
          setTodos={setTodos} 
          inputText={inputText} 
          setInputText={setInputText}
          setStatus={setStatus}
        />
        <TodoLists 
          setTodos={setTodos} 
          todos={todos} 
          filterTodos={filterTodos}
        />
      </header>
    </div>
  );
}

export default App;
