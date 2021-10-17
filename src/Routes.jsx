import React, { useEffect, useState } from 'react';
import AuthHandler from './pages/auth/AuthHandler';
import DashboardHandler from './pages/dashboard/DashboardHandler';
import { activateSession } from './redux/action/auth/login.action';
import { useSelector, useDispatch } from 'react-redux';

function Routes() {
    const dispatch = useDispatch();
    const session = useSelector(state => state.session);

    useEffect(()=>{
        localStorage.getItem('userSession') === 'Active' && dispatch(activateSession());
    },[]);

    return (
        <>
            {session !== 'Active' && localStorage.getItem('userSession') !== 'Active' ? (
                <AuthHandler />
            ) : null}
            {session === 'Active' && localStorage.getItem('userSession') === 'Active' ? (
                <DashboardHandler />
            ) : null}
        </>
    )
}

export default Routes;