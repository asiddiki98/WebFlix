import React from 'react'

import VideoIndexItem from './video_index_item/video_index_item'


class VideoIndexRow extends React.Component{

    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(number){
        
        let next = document.getElementById(`${this.props.genreName}-index-row`);
        
        if (number == 600 && next.scrollLeft == 1570 && (this.props.genreName == 'horror' || this.props.genreName == 'thriller')){
                next.scrollLeft -= 1570
        } else if (number == 600 && next.scrollLeft == 1860 && !(this.props.genreName == 'horror' || this.props.genreName == 'thriller')){
            next.scrollLeft -= 1860
        } else if (number == -600 && next.scrollLeft == 0 && (this.props.genreName == 'horror' || this.props.genreName == 'thriller')){
            next.scrollLeft += 1570
        } else if (number == -600 && next.scrollLeft == 0 && !(this.props.genreName == 'horror' || this.props.genreName == 'thriller')){
            next.scrollLeft += 1860
        } else {
            next.scrollLeft += number
        }

    }

    render(){
        let videos = this.props.videos.map((video, idx) => {
            return (
                
                <VideoIndexItem key={`item-${idx}`}video={video}/>
                    
            )
        })
        return(
            <div className="video-index-row-div"> 
                <h1 className="video-index-row">{`${this.props.genreName.charAt(0).toUpperCase() + this.props.genreName.slice(1)}`}</h1>
                <button className="previous" onClick={() => this.handleClick(-600)}>&#10095;</button>
                <div className={`video-index-row`} id={`${this.props.genreName}-index-row`}>
                    {videos}  
                </div>
                <button className="next" onClick={() => this.handleClick(600)}>&#10095;</button>
            </div >
        )
    }
}

export default VideoIndexRow