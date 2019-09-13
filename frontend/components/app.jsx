import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import SignupFormContainer from "./session/session_form_container";
import LoginFormContainer from "./session/login_form_container";
import UserShowContainer from "./user_profile/user_show_container";
import { Route, Switch} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        {/* <ProtectedRoute exact path='/users/:id/:post_id' component={PostShowContainer} /> */}
        {/* <BrowserRouter> */}
            
            <ProtectedRoute exact path="/users/:id" component={UserShowContainer} /> 
            <Switch>
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
                <ProtectedRoute path="/" component={GreetingContainer} />
                {/* <ProtectedRoute path="/post-index" component={PostIndexContainer} /> */}
            </Switch>
        {/* </BrowserRouter> */}
    </div>
);

export default App;