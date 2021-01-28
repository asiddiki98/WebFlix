import React from 'react';
import VideoIndexRow from './video_index_row/video_index_row_container'

class VideoIndex extends React.Component{


    componentDidMount(){
        this.props.fetchVideos()
    }

    render(){
    
        const genres = {
            horror: this.props.videos.filter(el => el.genres.includes("Horror")),
            comedy: this.props.videos.filter(el => el.genres.includes("Comedy"))
        }

        const videoRows = Object.keys(genres).map((genre, idx) => {
           return (
               <VideoIndexRow key={`row-${idx}`} genreName={genre} videos={genres[genre]} /> 
               ) 
        })
      
        return (
            <div className="video-index">
                <video className="main-video" src="/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBMZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1d8647041e9d2c146ebe71ac5ad16ba304db222f/insidious.mp4" typeof="video/mp4" controls={false} autoPlay></video>
                {videoRows}
            </div>
        )
    }
}

export default VideoIndex