import React from 'react'
import { ProSidebarProvider } from 'react-pro-sidebar'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link, useParams } from 'react-router-dom';
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdMenuBook } from "react-icons/md";
import Lmsheader1 from "./Vector.png"

function Studentdashboard() {
    const obj = useParams()
    return (
        <>
            <div >
                <ProSidebarProvider>
                    <Sidebar>
                        <Menu className='sidebar2'>
                        <div className='d-flex m-3'>
                            <img src={Lmsheader1} alt="LMS" style={{ width: "45px", height: "51.37px"}}/>
                            <h1 className='px-3' style={{ width: "50px", height: "50px" }}>LMS</h1>
                        </div>
                            <MenuItem routerLink={<Link to={`/students/mybook/${obj.studentid}`} />}> <AiOutlineCheckCircle/> My Books</MenuItem>
                            <MenuItem routerLink={<Link to={`/students/studentallbooks/${obj.studentid}`} />}><MdMenuBook/> All Books</MenuItem>
                        </Menu>
                    </Sidebar>
                </ProSidebarProvider>
            </div>
        </>
    )
}

export default Studentdashboard

