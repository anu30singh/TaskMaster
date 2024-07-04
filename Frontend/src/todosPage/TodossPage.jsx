// src/todosPage/TodosPage.jsx
import React, { useEffect, useState } from "react";
import { getTodos } from "./serverCalls";
import Todo from "./ToDo";
import AddTodo from "./AddTodo";

function TodosPage({ token }) {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            const todosData = await getTodos(token);
            setTodos(todosData);
        };
        fetchTodos();
    }, [token]);

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 text-white flex flex-col items-center py-10">
            <h1 className="text-4xl font-bold mb-6">My Tasks</h1>
            <div className="bg-white text-black p-8 rounded-lg shadow-lg w-full max-w-2xl">
                <AddTodo token={token} setTodos={setTodos} />
                <div className="mt-6 space-y-4">
                    {todos.map(todo => (
                        <Todo key={todo._id} todo={todo} token={token} setTodos={setTodos} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TodosPage;
