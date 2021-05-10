import React from 'react'
import ItemOptions from './item_options'
import { openModal } from '../../../../../actions/modal'

import { connect } from 'react-redux'

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
            <div className='video-index-item-option-div'>
                <div className="video-index-item">
                    
                    <video 
                    className="video-index-item"  
                    id={`video-${this.props.video.id}`}
                    poster={this.props.video.photoUrl} 
                    src={this.props.video.videoUrl} 
                    onMouseOver={this.handleMouseIn()}
                    onMouseOut={this.handleMouseOut()}
                    typeof="video/mp4" 
                    controls={false}>
                        
                    </video>
      
                </div>
                <ItemOptions video={this.props.video} open={this.props.littleModal}/>
                    
            </div>
        )
    }
}

const mstp = (state) => {
    return {
        modal: state.modal
    }
}

const mdtp = (dispatch) => {
    return {
        littleModal: (video) => dispatch(openModal(video))
    }
}

export default connect(mstp, mdtp)(VideoIndexItem)