import React from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import LandingPage from 'app/components/pages/LandingPage';

window.onload = () => React.render((
    <Router history={createBrowserHistory()}>
        <Route path="*" component={LandingPage}/>
    </Router>
), document.body);
