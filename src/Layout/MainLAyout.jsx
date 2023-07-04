import React from 'react';
import NavBar from '../Component/NavBar';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Component/Footer';

const MainLAyout = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
            
        </div>
    );
};

export default MainLAyout;