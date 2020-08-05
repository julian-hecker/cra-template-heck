import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navbar, Footer } from '../components/organisms';
import Home from './Home';
import NotFound from './NotFound';

const Routes = (props) => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                {/* <Route path="/about" component={} /> */}
                {/* <Route path="/other" component={} /> */}
                <Route path="*" component={NotFound} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default Routes;
