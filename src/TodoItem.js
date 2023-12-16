// TodoItem.js

import React, { useState } from 'react';

function TodoItem({ todo, setTodos }) {
    const [editMode, setEditMode] = useState(false);
    const [editedTaskName, setEditedTaskName] = useState(todo.title);
    const [editedTaskDescription, setEditedTaskDescription] = useState(todo.description);
    const [editedTaskCompleted, setEditedTaskCompleted] = useState(todo.completed);

    const handleEdit = () => {
        setEditMode(true);
    };

    const handleSave = () => {
        setTodos((prevTodos) =>
            prevTodos.map((t) =>
                t.id === todo.id
                    ? {
                        ...t,
                        title: editedTaskName,
                        description: editedTaskDescription,
                        completed: editedTaskCompleted,
                    }
                    : t
            )
        );
        setEditMode(false);
    };

    const handleCancel = () => {
        setEditMode(false);
        setEditedTaskName(todo.title);
        setEditedTaskDescription(todo.description);
        setEditedTaskCompleted(todo.completed);
    };

    const handleDelete = () => {
        setTodos((prevTodos) => prevTodos.filter((t) => t.id !== todo.id));
    };

    return (
        <div className={`card-wrapper ${editMode ? 'edit-mode' : ''}`}>
            <div className="card-top">
                {editMode ? (
                    <>
                        <input
                            type="text"
                            value={editedTaskName}
                            onChange={(e) => setEditedTaskName(e.target.value)}
                        />
                        <label>
                            Completed
                            <input
                                type="checkbox"
                                checked={editedTaskCompleted}
                                onChange={() => setEditedTaskCompleted(!editedTaskCompleted)}
                            />
                        </label>
                    </>
                ) : (
                    <div className="card-header">{todo.title}</div>
                )}
            </div>
            <div className="card-body">
                {editMode ? (
                    <textarea
                        value={editedTaskDescription}
                        onChange={(e) => setEditedTaskDescription(e.target.value)}
                    />
                ) : (
                    <div className="task-description">{todo.description}</div>
                )}
                <div className="edit-delete-buttons">
                    {editMode ? (
                        <div>
                            <button onClick={handleSave}>Save</button>
                            <button onClick={handleCancel} style={{ marginLeft: '8px' }}>
                                Cancel
                            </button>
                        </div>
                    ) : (
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <button onClick={handleEdit}>Edit</button>
                            <button onClick={handleDelete} style={{ marginLeft: '8px' }}>
                                Delete
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default TodoItem;
