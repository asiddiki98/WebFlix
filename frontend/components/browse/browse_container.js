import { connect } from 'react-redux';
import Browse from './browse'
import { fetchVideos } from '../../actions/videos'
import { fetchList, addToList, deleteFromList } from '../../actions/list'

const mstp = (state, ownProps) => {
    const videos = Object.values(state.entities.videos)

    return {
        videos: videos,
        list: Object.keys(state.entities.list),
        currentUser: state.session.currentUser
    }
}

const mdtp = (dispatch) => {
    return {
        fetchVideos: () => dispatch(fetchVideos()),
        addToList: (list) => dispatch(addToList(list)),
        deleteFromList: (list) => dispatch(deleteFromList(list)),
        fetchList: () => dispatch(fetchList())
    }
}
export default connect(mstp, mdtp)(Browse)