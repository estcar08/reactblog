import React, { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = () => {
    const [isAuth] = useState(localStorage.getItem('authorized') === '1');

    console.log(isAuth);
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return isAuth ? <Outlet /> : <Navigate to="/login" />;
}