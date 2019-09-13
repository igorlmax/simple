import React from 'react';

// props are defined methods, constants or arrays somewhere
const Todos = ({todos, deleteTodo}) => {

    // This part act as @Component in Angular
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div key={todo.id}>
                    <span
                        onClick={() => {deleteTodo(todo.id)}}>{todo.text}</span>
                </div>)
        })
    ) : (
        <p>You have no todo's left</p>
    );

    // Here is the rendered Template
    return (
        <div>
            {todoList}
        </div>
    )
};

export default Todos;
