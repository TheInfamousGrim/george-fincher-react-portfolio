import * as React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import { useState } from 'react';

// Components and routes
import './App.css';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Header from './components/Header';
import RootLayout from './routes/RootLayout';
import ErrorPage from './components/ErrorPage';

const App = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'about',
                element: <About />,
            },
        ],
    },
]);

export default App;
