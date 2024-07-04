// src/loginPage/LoginPage.jsx
import { useState } from "react";
import { signInHandler, signUpHandler } from "./ServerCalss";

function LoginPage(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <input
                    id="usernameInput"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Username"
                />
                <input
                    id="passwordInput"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Password"
                />
                <button
                    onClick={() => signInHandler({ username, password }, props)}
                    className="w-full px-4 py-2 mb-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    Sign In
                </button>
                <button
                    onClick={() => signUpHandler({ username, password }, props)}
                    className="w-full px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                    Sign Up
                </button>
            </div>
        </div>
    );
}

export default LoginPage;
