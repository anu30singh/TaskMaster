
import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <div className="h-screen bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 flex items-center justify-center">
            <div className="text-center text-white p-8 rounded-lg shadow-lg">
                <h1 className="text-5xl font-bold mb-6">Welcome to My Todo App</h1>
                <p className="text-lg mb-6">Manage your tasks efficiently and effectively.</p>
                <Link to="/login">
                    <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition duration-300">
                        Get Started
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default LandingPage;
