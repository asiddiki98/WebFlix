import React from 'react'

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: props.email,
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
    }

    render() {
        return (
            <div className="signin-form">
                <h2>Sign In!</h2>
                <form>
                    <label>Email:
                        <input type="email" value={this.state.email} onChange={this.handleInput("email")} />
                    </label>
                    <label>Password:
                        <input type="password" value={this.state.password} onChange={this.handleInput("password")} />
                    </label>
                    <button onClick={this.handleSubmit}>Sign In</button>
                </form>

            </div>
        )
    }
}

export default Login