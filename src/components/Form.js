import React from 'react';

const Form = ({inputText, setInputText, todos, setTodos, setStatus}) => {
    const handleInputValue = (e) => {
        setInputText(e.target.value);

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos, {text: inputText, completed: false, id: Math.random() * 1000}])
        setInputText('');
    }
    const statusHandler = (e) => {
        setStatus(e.target.value)
    }
    return (
        <form className="todo-form">
            <input placeholder="Type your ToDo..." value={inputText} onChange={handleInputValue} type="text" className="todo-input"/>
            <button onClick={handleSubmit} className="todo-btn">Add</button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="All">All</option>
                    <option value="Completed">Completed</option>
                    <option value="Uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;