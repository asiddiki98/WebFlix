import { connect } from 'react-redux';
import Browse from './browse'
import { fetchVideos } from '../../actions/videos'
import { fetchList } from '../../actions/list'

const mstp = (state, ownProps) => {
    const videos = Object.values(state.entities.videos)

    return {
        videos: videos,
        list: Object.values(state.entities.list)
    }
}

const mdtp = (dispatch) => {
    return {
        fetchVideos: () => dispatch(fetchVideos()),
        fetchList: () => dispatch(fetchList())
    }
}
export default connect(mstp, mdtp)(Browse)