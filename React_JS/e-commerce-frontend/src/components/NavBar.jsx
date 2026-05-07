import React from 'react';
import { Link } from 'react-router-dom';
import { Outlook } from 'react-bootstrap-icons';

export const NavBar = () => {
  return (
    <nav>
        <ol>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/products">Products</Link></li>
        </ol>
    </nav>
  )
}
