import React from 'react';
import logo from '../logo.svg';

export default function MainPage() {
    return (
        <div className="container mt-5">
            <img src={logo} alt="Logo" className="mb-4" style={{ width: '200px', height: '200px' }} />
            <h1 className="display-4">Landing Page</h1>
            <p className="lead">
                This is a simple landing page built with React and Bootstrap.
            </p>
        </div>
    );
}
