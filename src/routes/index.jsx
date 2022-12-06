import React from 'react';

import Header from '../components/Header';
import About from '../components/About';
import Footer from '../components/Footer';

export default function Index() {
    return (
        <div className="content-container">
            <div className="header-content-container">
                <Header />
                <About />
            </div>
            <Footer />
        </div>
    );
}
