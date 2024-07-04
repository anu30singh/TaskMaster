// src/App.jsx
import React, { useState } from 'react';
import LoginPage from "./loginPage/LoginPage";
import TodosPage from "./todosPage/TodossPage";

function App() {
    const [loggedIn, setLogin] = useState(false);
    const [token, setToken] = useState("");

    return (
        loggedIn ? <TodosPage token={token} /> : <LoginPage setLogin={setLogin} setToken={setToken} />
    );
}

export default App;
