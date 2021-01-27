import React from 'react'
import VideoIndexContainer from './videos_index/videos_index_container'


class Browse extends React.Component{
    render (){
        return (
            <div className="browse">
                <VideoIndexContainer />
            </div>
        )
    }
}

export default Browse