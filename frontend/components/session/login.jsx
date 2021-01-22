import React from 'react'
import { Link } from 'react-router-dom'

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
            <div className="signin-div">  
                <form className="signin-form">
                        <h2 className="signin-h2">Sign In</h2>
                    <div className="form-inner-div">
                        <br/>
                        <input className="signin-email" type="email" value={this.state.email} placeholder={" Email"} onChange={this.handleInput("email")} />
                        <br/>
                        <input className="signin-password" type="password" value={this.state.password} placeholder={" Password"} onChange={this.handleInput("password")} />
                        <br/>
                        <button className="signin-button" onClick={this.handleSubmit}>Sign In</button>
                        <div className="link">
                         <h1 className={"signin-p"}>New to Webflix?</h1>
                         <Link className={"signin-link"} to="/signup">Sign up now.</Link>
                        </div>
                    </div>
                </form>

            </div>
        )
    }
}

export default Login