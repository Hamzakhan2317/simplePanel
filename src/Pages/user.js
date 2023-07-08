import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Components/sidebar';

const UserTable = () => {
    const [userData, setUserData] = useState(null);
    const [selected, setSelected] = useState('');
    const [isLoading, setIsLoading] = useState(false);
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
        setSelected(id)
        setIsLoading(true)
        try {
            await axios.post('https://ucp-ride.onrender.com/api/user/deleteUser', { _id: id });
            fetchData(); // Fetch updated user data after deletion
            setIsLoading(false)
        } catch (error) {
            console.error('Error deleting user', error);
            setIsLoading(false)
        }
    };

    return (
        <Sidebar>
            <div className="custom-container" >
                <h2>Users</h2>
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
                                            Delete {isLoading && data._id === selected ?
                                                <div class="spinner-border text-secondary" style={{width: '1rem', height: '1rem'}} role="status">
                                            <span class="sr-only">Loading...</span>
                                        </div>
                                                : ""}
                                    </button>
                                </td>
                                </tr>
                            ))}
                </tbody>
            </table>
        </div>
        </Sidebar >
    );
};

export default UserTable;
