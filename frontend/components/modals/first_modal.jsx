import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal'


const Modal = ({modal, close}) => {
    if (!modal) return null 
    let component = <video
        className="modal-video"
        poster={modal.photoUrl}
        src={modal.videoUrl}
        typeof="video/mp4"
        controls={false}
        autoPlay
        muted
        >

    </video>

    return (
        <div className="modal-background" onClick={() => close()} >
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
                <h1>{modal.title}</h1>
                <h2>{`(${modal.year})`}</h2>
                <h2>{modal.genres}</h2>
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