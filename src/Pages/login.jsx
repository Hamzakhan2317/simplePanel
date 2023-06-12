import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Perform input validation here (e.g., check for empty fields)

            // Make API request to login
            const response = await axios.post('https://ucp-ride.onrender.com/api/user/login', {
                email: email,
                password: password
            }).then((res) => {
                navigate('/users')
            });

            // Handle successful login, e.g., navigate to home page
            console.log('Login successful');
            // Navigate to home page or perform any other action

        } catch (error) {
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
                    <button type='submit' class="btn mt-3">Login</button>
                </form>
                <div class="text-center fs-6">
                    <a href="#">Forget password?</a> or <a href="#">Sign up</a>
                </div>
            </div>
        </>
    );
};

export default LoginPage;