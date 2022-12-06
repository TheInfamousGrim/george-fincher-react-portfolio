import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = () => (
    <div className="content-container">
        <div className="header-content-container">
            <Header />
            <Outlet />
        </div>
        <Footer />
    </div>
);

export default Layout;
