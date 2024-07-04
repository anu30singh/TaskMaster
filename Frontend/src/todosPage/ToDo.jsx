// src/todosPage/ToDo.jsx
import { AiOutlineDelete } from "react-icons/ai";
import { deleteTodo } from "./serverCalls";
import React from "react";

function Todo (props) {
    return (
        <div className="flex justify-between items-center p-4 bg-gray-100 rounded-md shadow-md">
            <div>
                <h3 className="text-lg font-bold text-blue-600">{props.todo.title}</h3>
                <p className="text-gray-700">{props.todo.description}</p>
            </div>
            <div>
                <AiOutlineDelete
                    className="text-red-500 text-2xl cursor-pointer hover:text-red-600"
                    onClick={async () => {
                        const todosData = await deleteTodo(props.token, props.todo._id);
                        await props.setTodos(todosData);
                    }}
                />
            </div>
        </div>
    );
}

export default Todo;
