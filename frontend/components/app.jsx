import React from "react";
import NavBarContainer from "./navbar/navbar_container";
import SignupFormContainer from "./session/session_form_container";
import LoginFormContainer from "./session/login_form_container";
import UserShowContainer from "./user_profile/user_show_container";
import PostIndexContainer from "./post/post_index_container";
import { Route, Switch} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
            <ProtectedRoute path="/" component={NavBarContainer} />
            
            <ProtectedRoute exact path="/users/:id" component={UserShowContainer} /> 
            <Switch>
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
                <ProtectedRoute exact path='/feed' component={PostIndexContainer} />
                {/* <ProtectedRoute path="/" component={NavBarContainer} /> */}
                {/* <ProtectedRoute path="/post-index" component={PostIndexContainer} /> */}
            </Switch>
        {/* </BrowserRouter> */}
    </div>
);

export default App;