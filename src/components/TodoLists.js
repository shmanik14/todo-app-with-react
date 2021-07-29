import React from 'react';
import Todo from './Todo';

const TodoLists = ({todos, setTodos, filterTodos}) => {
    return (
        <div>
            {
                filterTodos.map(todo => <Todo key={todo.key} todo={todo} todos={todos} setTodos={setTodos}></Todo>)
            }
        </div>
    );
};

export default TodoLists;