import { connect } from 'react-redux';
import Browse from './browse'
import { fetchVideos } from '../../actions/videos'

const mstp = (state, ownProps) => {
    const videos = Object.values(state.entities.videos)

    return {
        videos: videos
    }
}

const mdtp = (dispatch) => {
    return {
        fetchVideos: () => dispatch(fetchVideos())
    }
}
export default connect(mstp, mdtp)(Browse)