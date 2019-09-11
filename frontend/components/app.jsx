import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import SignupFormContainer from "./session/session_form_container";
import LoginFormContainer from "./session/login_form_container";
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <header>
            <h1>Disneygram</h1>
            <Route path="/" component={GreetingContainer} />
        </header>
        
        
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        {/* <ProtectedRoute path="/post-index" component={PostIndexContainer} /> */}
    </div>
);

export default App;