import React from 'react'
import ItemOptions from './item_options'

class VideoIndexItem extends React.Component{

    handleMouseIn(){
        return (e) => {
    
            e.target.play()

        }
    }

    handleMouseOut(){
        return (e) => {
            e.target.load()
            e.target.pause();
        }
    }
    render(){
        return(
            <div className='test-div'>
                <div className="video-index-item">
                    
                    <video 
                    className="video-index-item"  
                    poster={this.props.video.photoUrl} 
                    src={this.props.video.videoUrl} 
                    onMouseOver={this.handleMouseIn()}
                    onMouseOut={this.handleMouseOut()}
                    typeof="video/mp4" 
                    controls={false}>
                        
                    </video>
                    
                </div>
                <ItemOptions />
            </div>
        )
    }
}

export default VideoIndexItem