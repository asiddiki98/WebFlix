import * as APIUtil from '../utils/videos';

export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";


//regular action creators

const receiveVideos = (payload) => {
    return {
        type: RECEIVE_VIDEOS,
        videos: payload.videos
    }
}

const receiveVideo = (payload) => {
    return {
        type: RECEIVE_VIDEO,
        video: payload
    }
}

// thunk action creators

export const fetchVideos = () => {
    return (dispatch) => {
        return APIUtil.fetchVideos().then((payload) =>{
            debugger
            dispatch(receiveVideos(payload))
        })
    }
}
export const fetchVideo = (videoId) => {
    return (dispatch) => {
        return APIUtil.fetchVideo(videoId).then((payload) =>{
            dispatch(receiveVideo(payload))
        })
    }
}