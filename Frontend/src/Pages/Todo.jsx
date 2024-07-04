// Todos.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [loading, setLoading] = useState(true); // State to manage loading

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await axios.get('/api/todos', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setTodos(response.data); // Assuming response.data is an array
                setLoading(false); // Set loading to false after fetching data
            } catch (error) {
                console.error(error);
                setLoading(false); // Set loading to false on error as well
            }
        };

        fetchTodos();
    }, []);

    const handleAddTodo = async (newTodoText) => {
        try {
            const response = await axios.post('/api/todos', { text: newTodoText }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setTodos([...todos, response.data]); // Add new todo to the list
            setNewTodo(''); // Clear input after adding todo
        } catch (error) {
            console.error(error);
        }
    };

    const handleDeleteTodo = async (id) => {
        try {
            await axios.delete(`/api/todos/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setTodos(todos.filter(todo => todo._id !== id)); // Remove deleted todo from the list
        } catch (error) {
            console.error(error);
        }
    };

    if (loading) {
        return <p>Loading...</p>; // Render loading indicator while fetching todos
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-4 text-center">My ToDo List</h1>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleAddTodo(newTodo); // Pass newTodo state to handleAddTodo function
                }} className="mb-6">
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Add a new task"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 mt-4 rounded-md hover:bg-blue-600 transition duration-200"
                    >
                        Add Task
                    </button>
                </form>
                <ul>
                    {Array.isArray(todos) && todos.map(todo => (
                        <li key={todo._id} className="flex justify-between items-center bg-gray-50 p-4 rounded-md mb-2 shadow-sm">
                            <span>{todo.text}</span>
                            <button
                                onClick={() => handleDeleteTodo(todo._id)}
                                className="text-red-500 hover:text-red-600"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Todos;
