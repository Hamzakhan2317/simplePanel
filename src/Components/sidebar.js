import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const Sidebar = ({ children }) => {
    const {pathname} = useLocation();
    const navigate = useNavigate();

    const handleLogout=()=>{
        navigate('/login')
    }
    return (
        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
            <CDBSidebar >
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                        UCP Ride
                    </a>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink exact to="/drivers" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="columns" className={`${pathname == "/drivers" ? "activeClicked" : ""}`}>Drivers</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/users" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="user" className={`${pathname == "/users" ? "activeClicked" : ""}`}>Users</CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>

                <CDBSidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        style={{
                            padding: '20px 5px',
                            cursor:'pointer'
                        }}
                        onClick={handleLogout}
                    >
                       Logout
                    </div>
                </CDBSidebarFooter>
            </CDBSidebar>
            {children}
        </div>
    );
};

export default Sidebar;