import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            full_name: '',
            password: ''
            
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);

    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }


    handleSubmit(e) {
        e.preventDefault();
        
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then((res) => {
                this.props.history.push(`/users/${res.user.id}`)
            } 
            )
    }

    handleDemo(e){
        e.preventDefault();
        const demoUser = Object.assign({}, {username: 'forky', password: '123456'});
        this.props.processDemo(demoUser)
            .then((res) => {
                this.props.history.push(`/users/${res.user.id}`)
                }
            )
    }

    render() {
        return (
            <div className="parent-div">
                <div className="iphone-image">
                    <img width="320px height=300px" src="https://library.kissclipart.com/20180830/ffw/kissclipart-android-phone-png-clipart-iphone-clip-art-af395bce23124e2d.png" />
                    <div className="signup-form">
                        <form className="signup-form-inner">
                            <h1 className="logo">Disneygram</h1>
                            <h2 className="signup-header">
                                Sign up to see photos and videos from your friends.
                            </h2>
                            <div>
                                <input      
                                    placeholder="Username"
                                    className="signup-input"
                                    type="text"
                                    value={this.state.username}
                                    onChange={this.handleInput('username')}
                                />
                            </div>
                            <div>
                                <input
                                    placeholder="Full Name"
                                    className="signup-input"
                                    type="text"
                                    value={this.state.full_name}
                                    onChange={this.handleInput('full_name')}
                                />
                            </div>
                            <div>
                                <input      
                                    placeholder="Password"
                                    className="signup-input"
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.handleInput('password')}
                                />
                            </div>
                            <div>
                                <button className="session-button" onClick={this.handleSubmit}>Sign Up</button>
                            </div>
                            <div>
                                <button className="session-button" onClick={this.handleDemo} >Demo Login</button>
                            </div>
                        </form>
                        <div className="switch-session">
                            Have an account? <Link to="/login" style={{ textDecoration: 'none' }}>Log in</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SessionForm;
