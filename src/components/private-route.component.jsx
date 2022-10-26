import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// Custom hooks
import { useAuthStatus } from '../hooks/useAuthStatus.component';


const PrivateRoute = () => {
    const { isLoggedIn, loading } = useAuthStatus();

    if(loading){
        return(
            <h3>Loading...</h3>
        )
    }

    return isLoggedIn ? <Outlet /> : <Navigate to='/sign-in' />

}

export default PrivateRoute;