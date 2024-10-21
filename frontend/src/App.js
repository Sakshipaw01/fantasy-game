import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage';
import TeamPage from './components/TeamPage';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <header>
                <h1>Welcome to Fantasy Game!</h1>
            </header>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/team" element={<TeamPage />} />
            </Routes>
        </div>
    );
}

function HomePage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegistration = (event) => {
        event.preventDefault();
        // Save user data in local storage
        localStorage.setItem('user', JSON.stringify({ name, email, password }));
        navigate('/team'); // Redirect to TeamPage after successful registration
    };

    return (
        <div className="form-container">
            <h2 className="form-title">Registration</h2>
            <form onSubmit={handleRegistration}>
                <input 
                    type="text" 
                    placeholder="Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <button type="submit">Register</button>
            </form>
            <div>
                <Link to="/login">
                    <button>Go to Login</button>
                </Link>
            </div>
        </div>
    );
}

export default App;
