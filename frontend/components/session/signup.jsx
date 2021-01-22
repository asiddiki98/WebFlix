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
            <div className="signup-div">

                <form>
                    <h1 className={"signup-h1"}>Create a password to start your</h1>
                    <h1 className={"signup-h1"}> membership.</h1>
                    <br/>
                    <h2 className={"signup-h2"}>This is the last step and you're done!</h2>
                    <h2 className={"signup-h2"}>We hate paperwork, too.</h2>
                    <br/>

                    <input className={"signup-email"} type="text" value={this.state.email} placeholder={" Email"} onChange={this.handleInput("email")}/>

                    <br/>

                    <input className={"signup-password"} type="password" value={this.state.password} placeholder={" Add a Password"} onChange={this.handleInput("password")}/>

                    <br/>
                    <button className={"signup-button"} onClick={this.handleSubmit}>Continue</button>
                </form>

            </div>
        )
    }
}

export default Signup