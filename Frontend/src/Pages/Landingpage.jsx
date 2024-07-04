// src/pages/LandingPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
            <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">Welcome to ToDo App</h1>
                <p className="text-xl mb-8">Manage your tasks efficiently and stay organized.</p>
                <div>
                    <button
                        onClick={() => navigate('/login')}
                        className="bg-white text-blue-500 font-semibold px-6 py-3 rounded-full mr-4"
                    >
                        Login
                    </button>
                    <button
                        onClick={() => navigate('/signup')}
                        className="bg-white text-blue-500 font-semibold px-6 py-3 rounded-full"
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
