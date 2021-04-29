import React from 'react'
import { connect } from 'react-redux';
import { fetchVideo } from '../../actions/videos'
import { Link } from 'react-router-dom';

class VideoShow extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        let number = this.props.location.pathname.split("/")
        let num = parseInt(number[number.length-1])
        this.props.fetchVideo(num)

    }

    render(){

        let display;
        if (this.props.video[0]){
            display = <video 
            className="show-video"
            controls
            src={this.props.video[0].videoUrl}>
            </video>
        } else {
            display = null
        }
        return (
            <div className="show-div">
                <Link to='/browse'> <button className="back-button">{`<-`}</button></Link>
                {display}
            </div>
        )
    }
}


const mstp = state => {
    let video = Object.values(state.entities.videos)
    return {
        video: video
    }
}

const mdtp = dispatch => {
    return {
        fetchVideo: (id) => dispatch(fetchVideo(id))
    }
}





export default connect(mstp, mdtp)(VideoShow)