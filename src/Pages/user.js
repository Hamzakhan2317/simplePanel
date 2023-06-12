import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserTable = () => {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    // Make API request to fetch user data
    const fetchData = async () => {
        try {
            const response = await axios.post('https://ucp-ride.onrender.com/api/user/user');
            setUserData(response?.data?.data);
        } catch (error) {
            console.error('Error fetching user data from API', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // Handle user deletion
    const handleDelete = async (id) => {
        try {
            await axios.post('https://ucp-ride.onrender.com/api/user/deleteUser', { _id: id });
            fetchData(); // Fetch updated user data after deletion
        } catch (error) {
            console.error('Error deleting user', error);
        }
    };

    return (
        <div className="container">
            <h2>Drivers Data Table</h2>
            <h3 style={{ cursor: 'pointer', color: 'blue' }} onClick={() => navigate('/drivers')}>
                Navigate to Drivers Table
            </h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Phone Number</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {userData &&
                        userData.map((data) => (
                            <tr key={data._id}>
                                <td>{data._id}</td>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.password}</td>
                                <td>{data.phoneNo}</td>
                                <td>{data.date}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => handleDelete(data._id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;
