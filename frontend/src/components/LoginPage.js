import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Added Link import

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        
        // Retrieve user data from local storage
        const userData = JSON.parse(localStorage.getItem('user'));
        
        // Check if user credentials match
        if (userData && userData.email === email && userData.password === password) {
            navigate('/team'); // Redirect to TeamPage if login is successful
        } else {
            alert('Invalid credentials. Please try again.'); // Alert for incorrect login
        }
    };

    return (
        <div className="form-container">
            <h2 className="form-title">Login</h2>
            <form onSubmit={handleLogin}>
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
                <button type="submit">Login</button>
            </form>
            <div>
                <Link to="/">
                    <button>Back to Home</button>
                </Link>
            </div>
        </div>
    );
}

export default LoginPage;
