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
        let mutebtn = document.getElementById("main-video")
        if (this.state.sound === true) {
            this.setState({ sound: false })
           mutebtn.muted = !mutebtn.muted
        } else if (this.state.sound === false) {
            this.setState({ sound: true })
            mutebtn.muted = !mutebtn.muted
        }

    }
    render(){
        let display; 
        if (this.state.sound){  
            display = <button className="sound" onClick={this.handleSound} src={window.soundUrl}>unmute</button>
        } else {
            display =  <button className="mute" onClick={this.handleSound} src={window.muteUrl}> mute</button> 
        }
        return (
            <div className="sound-div">
                {display} 
            </div>
        )
    }
}


export default Mute