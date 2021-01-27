import React from 'react'

class VideoIndexItem extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.video.title}</p>
                <video src={this.props.video.videoUrl} typeof="video/mp4" controls autoPlay></video>
            </div>
        )
    }
}

export default VideoIndexItem