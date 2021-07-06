import React from 'react'
import {Link } from 'react-router-dom'
import { addToList, fetchList, deleteFromList } from '../../../../../actions/list'
import { connect } from 'react-redux'


class ItemOptions extends React.Component{

    openModal(){
        this.props.open(this.props.video)
    }

    delete(){
        let list = {
            video_id: this.props.video.id,
            user_id: this.props.currentUser.id
        }
    
        this.props.deleteFromList(list)
    }
    add(){
        let list = {
            video_id: this.props.video.id,
            user_id: this.props.currentUser.id
        }
     
        this.props.addToList(list)
    }
    
    
    render(){
        let listBttn;
        if (this.props.list.includes(String(this.props.video.id))){
            listBttn = <img className="test-2" onClick={() => this.delete()}  src={window.addedUrl} />
        } else{
            listBttn = <img className="test-2" src={window.listUrl} onClick={() => this.add()} alt="" />
        } 

        return (
            <div className='test-div-2'>
                <Link to={`/video/${this.props.video.id}`}><img className="test" src={window.playButtonUrl} alt="" /></Link>
                {listBttn}
                <img  className="open" src={window.downUrl} onClick={() => this.openModal()}/>
            </div>
        )
    }
}

const mstp = (state) => {
    return {
        list: Object.keys(state.entities.list),
        currentUser: state.session.currentUser
    }
}

const mdtp = (dispatch) => {
    return {
        addToList: (list) => dispatch(addToList(list)),
        deleteFromList: (list) => dispatch(deleteFromList(list)),
        fetchList: () => dispatch(fetchList())
    }
}


export default connect(mstp, mdtp)(ItemOptions)