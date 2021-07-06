import React from 'react';
import VideoIndexRow from './video_index_row/video_index_row_container'

class VideoIndex extends React.Component{


    // componentDidMount(){
    //     this.props.fetchVideos()
    // }

    render(){
    
        const genres = {
            horror: this.props.videos.filter(el => el.genres.includes("Horror")),
            comedy: this.props.videos.filter(el => el.genres.includes("Comedy")),
            thriller: this.props.videos.filter(el => el.genres.includes("Thriller")),
            drama: this.props.videos.filter(el => el.genres.includes("Drama"))
        }

        const videoRows = Object.keys(genres).map((genre, idx) => {
           return (
               <VideoIndexRow key={`row-${idx}`} genreName={genre} videos={genres[genre]} /> 
               ) 
        })
      
        return (
            <div className="video-index">
                {videoRows}
            </div>
        )
    }
}

export default VideoIndex