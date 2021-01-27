import {connect} from 'react-redux'
import { fetchVideos } from '../../../actions/videos'
import VideoIndex from './videos_index'

const mstp = (state, ownProps) => {
    const videos = Object.values(state.entities.videos)
    debugger
    return {
        videos: videos
    }
}

const mdtp = (dispatch) => {
    return {
        fetchVideos: () => dispatch(fetchVideos())
    }
}

export default connect(mstp, mdtp)(VideoIndex)