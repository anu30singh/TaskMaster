// src/todosPage/ToDo.jsx
import { AiOutlineDelete } from "react-icons/ai";
import { deleteTodo } from "./serverCalls";
import React from "react";

function Todo (props) {
    return (
        <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md mb-2">
            <div>
                <h3 className="text-lg font-bold text-blue-500">{props.todo.title}</h3>
                <p className="text-sm text-gray-600">{props.todo.description}</p>
            </div>
            <div>
                <AiOutlineDelete
                    className="text-red-500 hover:text-red-600 cursor-pointer"
                    size={24}
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
