// src/todosPage/TodosPage.jsx
import React, { useEffect, useState } from "react";
import { getTodos } from "./serverCalls";
import Todo from "./ToDo";
import AddTodo from "./AddTodo";

function TodosPage(props) {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            const todosData = await getTodos(props.token);
            setTodos(todosData);
        };
        fetchTodos();
    }, [props.token]);

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-3xl font-bold text-center mb-8">My ToDos</h1>
            <div className="max-w-3xl mx-auto">
                <AddTodo token={props.token} setTodos={setTodos} />
                <div className="mt-4">
                    {todos.map(todo => (
                        <Todo key={todo._id} todo={todo} token={props.token} setTodos={setTodos} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TodosPage;
