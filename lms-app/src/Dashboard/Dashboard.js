import React from 'react'
import { ProSidebarProvider } from 'react-pro-sidebar'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdMenuBook } from "react-icons/md";
import { MdOutlinePeople } from "react-icons/md";
import Lmsheader1 from "./Vector.png"

function Dashboard() {
    return (
        <>
            <div >
                <ProSidebarProvider>
                    <Sidebar>
                        
                        <Menu className='sidebar'>
                        <div className='d-flex m-3'>
                            <img src={Lmsheader1} alt="LMS" style={{ width: "45px", height: "51.37px"}}/>
                            <h1 className='px-3' style={{ width: "50px", height: "50px" }}>LMS</h1>
                        </div>
                            <MenuItem routerLink={<Link to="/issuedbooks" />}> <AiOutlineCheckCircle/> Issued Books</MenuItem>
                            <MenuItem routerLink={<Link to="/allbooks" />}><MdMenuBook/> All Books</MenuItem>
                            <MenuItem routerLink={<Link to="/students" />}><MdOutlinePeople/> Students</MenuItem>
                        </Menu>
                    </Sidebar>
                </ProSidebarProvider>
            </div>
        </>
    )
}

export default Dashboard

