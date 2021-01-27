import React from 'react'
import VideoIndexItem from './video_index_item/video_index_item'


class VideoIndexRow extends React.Component{


    render(){
        let videos = this.props.videos.map((video, idx) => {
            return (
                <VideoIndexItem key={`item-${idx}`}video={video}/>
            )
        })
        return(
            <div>
                <h1>{this.props.genreName.charAt(0).toUpperCase() + this.props.genreName.slice(1)}</h1>
                {videos}
            </div>
        )
    }
}

export default VideoIndexRow