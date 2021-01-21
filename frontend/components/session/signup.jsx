import React from 'react'

class Signup extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            
            email: props.email,
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(field){
        return (e) =>{
            this.setState({ [field]: e.target.value })
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createNewUser(this.state)
    }

    render(){
        return (
            <div className="signup-form">
                <h2>Sign Up!</h2>
                <form>
                    <label>Email: 
                        <input type="text" value={this.state.email} onChange={this.handleInput("email")}/>
                    </label>
                    <label>Password: 
                        <input type="password" value={this.state.password} onChange={this.handleInput("password")}/>
                    </label>
                    <button onClick={this.handleSubmit}>Signup</button>
                </form>

            </div>
        )
    }
}

export default Signup