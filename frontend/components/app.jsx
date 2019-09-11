import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route, Switch } from 'react-router-dom';
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container";
import SplashContainer from "./splash/splash_container";
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        {/* <Route path="/" component={SplashContainer}/> */}
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
);

export default App;