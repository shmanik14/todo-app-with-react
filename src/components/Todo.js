import React from 'react';

const Todo = ({todo, todos, setTodos}) => {

    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }
    const completeHandler = () => {
        setTodos(
            todos.map((item) => {
                if(item.id === todo.id){
                    return{
                        ...item, 
                        completed: !item.completed,
                    }
                }
                return item;
            })
        );
    };
    return (
        <div className="single-todo">
            <p className={`${todo.completed ? "completed" : ""}`}>{todo.text}</p>
            <div className="action-btn">
                <span onClick={completeHandler} className="complete-btn">Complete</span>
                <span onClick={deleteHandler} className="delete-btn">Delete</span>
            </div>
        </div>
    );
};

export default Todo;