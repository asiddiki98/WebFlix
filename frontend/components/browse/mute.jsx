import React from 'react'

class Mute extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            sound: true
        }

        this.handleSound = this.handleSound.bind(this)
    }
    handleSound() {
        if (this.state.sound === true) {
            this.setState({ sound: false })
        } else if (this.state.sound === false) {
            this.setState({ sound: true })
        }

    }
    render(){
        let display; 
        if (this.state.sound){
            display = <img className="sound" onClick={this.handleSound} src={window.soundUrl}/>
        } else {
            display =  <img className="mute" onClick={this.handleSound} src={window.muteUrl}/> 
        }
        return (
            <div className="sound-div">
                {display}
            </div>
        )
    }
}


export default Mute