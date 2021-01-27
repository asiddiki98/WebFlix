import React from 'react';
import VideoIndexRow from './video_index_row/video_index_row_container'

class VideoIndex extends React.Component{


    componentDidMount(){
        debugger
        this.props.fetchVideos()
    }

    render(){
        debugger

        const genres = {
            horror: this.props.videos.filter(el => el.genres.includes("Horror")),
            // comedy: this.props.videos.filter(el => el.genres.includes("Comedy"))
        }

        const videoRows = Object.keys(genres).map((genre, idx) => {
           return (
               <VideoIndexRow key={`row-${idx}`} genreName={genre} videos={genres[genre]} /> 
               ) 
        })

        return (
            <div>
                {videoRows}
            </div>
        )
    }
}

export default VideoIndex