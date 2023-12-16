import React, { useState } from 'react';
import Modal from 'react-modal';
import './App.css'; // Import the CSS file for styling

function AddTodoForm({ setModal, setTodos, todos }) {
    const [newTaskName, setNewTaskName] = useState('');
    const [newTaskDescription, setNewTaskDescription] = useState('');

    const handleAddTodo = () => {
        if (newTaskName.trim() !== '') {
            const newTodo = {
                id: todos.length + 1,
                title: newTaskName,
                description: newTaskDescription,
                completed: false,
            };
            setTodos((prevTodos) => [...prevTodos, newTodo]);
            setModal(false);
            setNewTaskName('');
            setNewTaskDescription('');
        }
    };

    return (
        <Modal
            isOpen={true}
            onRequestClose={() => setModal(false)}
            contentLabel="Add Task Modal"
        >
            <div>
                <h2>Add Task</h2>
                <input
                    type="text"
                    placeholder="Enter task name"
                    value={newTaskName}
                    onChange={(e) => setNewTaskName(e.target.value)}
                    className="form-input"
                />
                <textarea
                    placeholder="Enter task description"
                    value={newTaskDescription}
                    onChange={(e) => setNewTaskDescription(e.target.value)}
                    className="form-textarea"
                />
                <div className='button-container'>
                    <button onClick={handleAddTodo}>Add Task</button>
                    <button onClick={() => setModal(false)}>Cancel</button>
                </div>
            </div>
        </Modal>
    );
}

export default AddTodoForm;
