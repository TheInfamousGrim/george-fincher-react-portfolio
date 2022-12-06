import * as React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

// Components and routes
import './App.css';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';
import Resume from './components/Resume';
import RootLayout from './routes/RootLayout';
import ErrorPage from './components/ErrorPage';

const App = createBrowserRouter([
    {
        path: '/george-fincher-react-portfolio',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'portfolio',
                element: <Portfolio />,
            },
            {
                path: 'resume',
                element: <Resume />,
            },
            {
                path: 'contact',
                element: <ContactForm />,
            },
        ],
    },
]);

export default App;
