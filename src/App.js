import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import DriversTable from "./Pages/drivers";
import LoginPage from "./Pages/login";
import UserTable from "./Pages/user";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/users" element={<UserTable />} />
        <Route path="/drivers" element={<DriversTable />} />
      </Routes>
    </Router>
  );
}

export default App;
