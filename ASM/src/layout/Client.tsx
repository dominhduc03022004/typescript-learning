import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';
// import Footer from '../components/Footer';

function Client() {
    return (
        <>
            <Nav/>
            <Outlet/>
        </>
    );
}

export default Client;