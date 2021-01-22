import React from 'react';

class Register extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            email: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.checkEmail(this.state.email).then(() => {
            this.props.history.push('/login')},
        () => {
            this.props.history.push({
                pathname: '/signup',
                state: this.state
            })
        })
    }

    render(){
        return (
            <div className={'register'}>
                <form >
                    <h1>Unlimited movies, TV</h1>
                    <br/>
                    <h2>shows, and more.</h2>
                    <br/>
                    <h4>Watch anywhere. Cancel anytime.</h4>
                    <br/>
                    <h6>Ready to watch? Enter your email to create or restart your membership.</h6>
                    <div className={"register-email"}>
                    <input type="text" value={this.state.email} placeholder=" Email Address" onChange={this.handleInput("email")}/>
                        <button onClick={this.handleSubmit}>GET STARTED &#10095;</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Register