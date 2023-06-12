import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DriversTable = () => {
    const [apiData, setApiData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Make API request to fetch data
        const fetchData = async () => {
            try {
                const response = await axios.get('https://ucp-ride.onrender.com/api/drivers/driver');
                setApiData(response?.data?.data);
            } catch (error) {
                console.error('Error fetching API data', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container">
            <h2>Drivers Data Table</h2>
            <h4 style={{ cursor: 'pointer',color:'blue' }} onClick={(() => navigate('/users'))} >Navigate to Users Table</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Departure Location</th>
                        <th>Vehicle Type</th>
                        <th>No. of Seats</th>
                        <th>User ID</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {apiData &&
                        apiData.map((data) => (
                            <tr key={data._id}>
                                <td>{data._id}</td>
                                <td>{data.departureLocation}</td>
                                <td>{data.vehicleType}</td>
                                <td>{data.noOfSeats}</td>
                                <td>{data.userId}</td>
                                <td>{data.date}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default DriversTable;