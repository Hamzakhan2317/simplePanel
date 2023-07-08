import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)

        try {
            // Perform input validation here (e.g., check for empty fields)

            // Make API request to login
            const response = await axios.post('https://ucp-ride.onrender.com/api/user/login', {
                email: email,
                password: password
            }).then((res) => {
                setIsLoading(false)
                navigate('/users')
            });

            // Handle successful login, e.g., navigate to home page
            console.log('Login successful');
            // Navigate to home page or perform any other action

        } catch (error) {
            setIsLoading(false)
            // Handle error, e.g., display error message
            console.error('Login failed', error);
            // Display error message to the user or perform any other action
        }
    };

    return (
        <>
            <div class="wrapper">
                <div class="logo">
                    <img src="https://th.bing.com/th/id/OIP.FXJEVynN9pIKvbSPmdQONgHaHa?w=179&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
                </div>
                <div class="text-center mt-4 name">
                    Admin Panel
                </div>
                <form class="p-3 mt-3" onSubmit={handleSubmit}>
                    <div class="form-field d-flex align-items-center">
                        <span class="far fa-user"></span>
                        <input type="text" name="userName" id="userName" placeholder="Username"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div class="form-field d-flex align-items-center">
                        <span class="fas fa-key"></span>
                        <input
                            type="password"
                            name="password"
                            id="pwd"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                    </div>
                    <button type='submit' class="btn mt-3">Login
                        {isLoading ?
                            <div class="spinner-border text-secondary" style={{ width: '1rem', height: '1rem' }} role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                            : ""}
                    </button>
                </form>

            </div>
        </>
    );
};

export default LoginPage;