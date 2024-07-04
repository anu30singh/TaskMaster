
import React, { useState } from "react";
import { addTodo } from "./serverCalls";

function AddTodo (props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    async function addTodoHandler() {
        const todosData = await addTodo(props.token, { title, description });
        props.setTodos(todosData);
        setTitle("");
        setDescription("");
    }

    return (
        <div className="flex flex-col space-y-4">
            <div>
                <label className="block text-gray-700 font-bold mb-2">Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="What is your task title"
                />
            </div>
            <div>
                <label className="block text-gray-700 font-bold mb-2">Description</label>
                <input
                    type="text"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter task description"
                />
            </div>
            <div>
                <button
                    type="button"
                    onClick={addTodoHandler}
                    className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    Add Task
                </button>
            </div>
        </div>
    );
}

export default AddTodo;
