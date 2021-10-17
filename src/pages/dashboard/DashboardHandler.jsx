import React, { useState } from 'react';
import { Redirect, Switch, Route } from "react-router-dom";
import Dashboard from './Dashboard';
import FundDetails from './FundDetails';

function DashboardHandler() {
    return (
        <>
            <Route path="/dashboard" >
                <Dashboard />
            </Route>
            <Route path="/fund-details/:id" >
                <FundDetails />
            </Route>
            <Redirect from="/" to="/dashboard" />
        </>
    )
}

export default DashboardHandler;