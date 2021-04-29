import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal'
import Mute from '../browse/mute'
import { Link } from 'react-router-dom';

const Modal = ({modal, close}) => {
    if (!modal) return null 
    let genres;

    if (modal.genres.length > 1){
        genres = modal.genres.join(", ")
    } else {
        genres = modal.genres
    }
    let component = <div className="video" >
            <video
            className="modal-video"
            id="modal-video"
            src={modal.videoUrl}
            typeof="video/mp4"
            controls={false}
            autoPlay
            muted
            >
        </video>
        <div className="options">
            <Link to={`/video/${modal.id}`}><img className="play-button" onClick={() => close()} src={window.playButtonUrl} alt="" /></Link>
            <img className="list-button" alt="svgImg" src={window.listUrl} alt=""/>
        </div>
        <Mute />
    </div>

    return (
        <div className="modal-background" onClick={() => close()} >
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
                <div className="modal-info">
                    <div className="modal-left" >
                       <p className="title">{`${modal.title} (${modal.year}) 2h 5m`}</p>
                        <p className="description">{modal.description}</p>
                    </div>
                    <div className="modal-right">
                        <p className="director">Director: {modal.director}</p>
                        <p className="genres">Genres: {genres}</p>

                    </div> 
                </div>
            </div>
        </div>

    )
}

const mstp = ({ modal }) => ({
    modal: modal
});

const mdtp = dispatch => ({
    close: () => dispatch(closeModal())
});

export default connect(mstp, mdtp)(Modal);