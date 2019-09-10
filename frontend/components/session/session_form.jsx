import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state);
    }
    render() {
        return (
            <div>
                <div className="signup-form">
                    <h1 className="logo">Disneygram</h1>
                    <form>
                        <label>
                    <div>
                    <input      placeholder="Username"
                                type="text"
                                value={this.state.username}
                                onChange={this.handleInput('username')}
                            />
                    </div>
                        </label>

                        <label>
                            <div>
                    <input      placeholder="Password"
                                type="password"
                                value={this.state.password}
                                onChange={this.handleInput('password')}
                            />
                    </div>
                            <button onClick={this.handleSubmit}>Sign Up!</button>
                        </label>
                    </form>
                </div>
            </div>
        );
    }
}

export default SessionForm;
