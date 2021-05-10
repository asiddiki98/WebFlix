import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal'
import Mute from '../browse/mute'
import { Link } from 'react-router-dom';
import { fetchList, addToList, deleteFromList } from '../../actions/list'

class Modal extends React.Component {

    componentDidMount(){
        this.props.fetchList()
    }

    delete() {
        let list = {
            video_id: this.props.modal.id,
            user_id: this.props.currentUser.id
        }
        // this.props.addToList(list)
        this.props.deleteFromList(list)
        // this.props.fetchList().then( )
    }
    add() {
        let list = {
            video_id: this.props.modal.id,
            user_id: this.props.currentUser.id
        }
        this.props.addToList(list)
        // this.props.deleteFromList(list)
        // this.props.fetchList().then( )
    }


    render(){
        let modal = this.props.modal;
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
                <Link to={`/video/${modal.id}`}><img className="play-button" onClick={() => this.props.close()} src={window.playButtonUrl} alt="" /></Link>
                {this.props.list.includes(String(modal.id)) ? <img className="list-button" onClick={() => this.delete()} src={window.addedUrl} /> : <img className="list-button" src={listUrl} onClick={() => this.add()} />}
            </div>
            <Mute modal={true} />
        </div>
    
        return (
            <div className="modal-background" onClick={() => this.props.close()} >
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
}

const mstp = (state) => ({
    modal: state.modal,
    list: Object.keys(state.entities.list),
    currentUser: state.session.currentUser
});

const mdtp = dispatch => ({
    close: () => dispatch(closeModal()),
    addToList: (list) => dispatch(addToList(list)),
    deleteFromList: (list) => dispatch(deleteFromList(list)),
    fetchList: () => dispatch(fetchList())
});

export default connect(mstp, mdtp)(Modal);