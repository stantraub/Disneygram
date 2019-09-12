import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import SignupFormContainer from "./session/session_form_container";
import LoginFormContainer from "./session/login_form_container";
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <header>
            {/* <h1>Disneygram</h1> */}
            <Route path="/" component={GreetingContainer} />
        </header>
        
        {/* <Switch> */}
            
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            
            {/* <ProtectedRoute path="/post-index" component={PostIndexContainer} /> */}
        {/* </Switch> */}
    </div>
);

export default App;