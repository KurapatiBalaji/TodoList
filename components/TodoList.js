// TodoList.js

import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';
import FilterButtons from './FilterButtons';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [showCompleted, setShowCompleted] = useState('all');
    const [modal, setModal] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1/todos')
            .then((response) => response.json())
            .then((data) => setTodos(data))
            .catch((error) => console.error('Error fetching todos:', error));
    }, []);

    const filteredTodos = showCompleted === 'all' ? todos : todos.filter((todo) => todo.completed);

    return (
        <div className="header text-center">
            <h3>Task List</h3>
            <div className="button-container">
                <button className="btn btn-primary" onClick={() => setModal(true)}>
                    Create Task
                </button>
            </div>
            <FilterButtons setShowCompleted={setShowCompleted} />

            <div className="card-container">
                {filteredTodos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
                ))}
                {modal && <AddTodoForm setModal={setModal} setTodos={setTodos} todos={todos} />}
            </div>
        </div>
    );
}

export default TodoList;
