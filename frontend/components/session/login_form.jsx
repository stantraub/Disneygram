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
        this.props.login(this.state);
    }
    render() {
        return (
            <div className="session-form">
                <h2 className="logo">Disneygram</h2>
                <form>
                    <label>
                        <div>
                            <input  placeholder="Username"
                            className="signup-input"
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                            />
                        </div>
                    </label>

                    <label>
                    <input          
                            placeholder="Password"
                            className="signup-input"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                        <button className="session-button" onClick={this.handleSubmit}>Log in</button>
                    </label>
                </form>
            </div>
        );
    }
}

export default SessionForm;