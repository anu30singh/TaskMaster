// src/todosPage/AddTodo.jsx
import React, { useState } from "react";
import { addTodo } from "./serverCalls";

function AddTodo (props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    async function addTodoHandler() {
        const todosData = await addTodo(props.token, { title, description });
        props.setTodos(todosData);
    }

    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow-md mb-4">
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    placeholder="What is your task title"
                    className="mt-1 px-3 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <input
                    type="text"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    placeholder="Enter task description"
                    className="mt-1 px-3 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>
            <button
                type="button"
                onClick={addTodoHandler}
                className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
                Add
            </button>
        </div>
    );
}

export default AddTodo;
