
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./pages/landingpage";
import LoginPage from "./loginPage/LoginPage";
import TodosPage from "./todosPage/TodossPage";

function App() {
    const [loggedIn, setLogin] = useState(false);
    const [token, setToken] = useState("");

    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage setLogin={setLogin} setToken={setToken} />} />
                {loggedIn && <Route path="/todos" element={<TodosPage token={token} />} />}
            </Routes>
        </Router>
    );
}

export default App;
