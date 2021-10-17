import React, { useState } from 'react';
import { Redirect, Switch, Route } from "react-router-dom";
import Login from './Login';
import Signup from './Signup';

function AuthHandler() {
    return (
        <>
            <Route path="/login" >
                <Login />
            </Route>
            <Route path="/signup" >
                <Signup />
            </Route>
            <Redirect from="/" to="/login" />
        </>
    )
}

export default AuthHandler;