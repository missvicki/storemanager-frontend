import React from 'react';
import App from '../components/App'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const Routes = () => (
    <Router>
        <div>
            <Route path="/" exact component={App} />
        </div>
    </Router>
);
export default Routes;

