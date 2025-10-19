import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

function Admin() {
    return (
        <>  
            {/* <h1>TRANG ADMIN</h1> */}
            <Outlet/>
            <Toaster position='top-right'/>
        </>
    );
}

export default Admin;