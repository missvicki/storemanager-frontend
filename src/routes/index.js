import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoginView from '../views/Login';
import HomeView from '../views/Home';


const Routes = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/" component={LoginView} />
                <Route path="/home" component={HomeView} />
            </Switch>
        </div>
    </BrowserRouter>
);
export default Routes;

