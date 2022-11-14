import React from 'react'
import {ProSidebarProvider} from 'react-pro-sidebar'
import {Sidebar, Menu, MenuItem} from 'react-pro-sidebar';
import {Link} from 'react-router-dom';


function Dashboard() {
    return (
        <>
        <div className='sidebar'>
            <ProSidebarProvider>
            <Sidebar>
                <Menu>
                    <MenuItem routerLink={<Link to="/issuedbooks" />}> Issued Books</MenuItem>
                    <MenuItem routerLink={<Link to="/allbooks" />}> All Books</MenuItem>
                    <MenuItem routerLink={<Link to="/students" />}> Students</MenuItem>
                </Menu>
            </Sidebar></ProSidebarProvider>
        </div>
        </>
    )
}

export default Dashboard

