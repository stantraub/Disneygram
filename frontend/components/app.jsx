import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import SignupFormContainer from "./session/session_form_container";
import LoginFormContainer from "./session/login_form_container";
// import Dummy from "./dummy";
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <header>
            {/* <h1>Disneygram</h1> */}
            {/* <Route exact path="/" component={GreetingContainer} /> */}
        </header>
        {/* <BrowserRouter> */}
            <Switch>
                <AuthRoute exact path="/" component={GreetingContainer} />
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
                {/* <ProtectedRoute path="/post-index" component={PostIndexContainer} /> */}
            </Switch>
        {/* </BrowserRouter> */}
    </div>
);

export default App;