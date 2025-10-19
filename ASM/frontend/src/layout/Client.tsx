import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';
import { Toaster } from 'react-hot-toast';
// import Footer from '../components/Footer';

function Client() {
    return (
        <>
            <Nav/>
            <Outlet/>
            <Toaster position='top-right'/>
        </>
    );
}

export default Client;