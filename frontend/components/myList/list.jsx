import React from 'react'
import {connect } from 'react-redux'
import {fetchList} from '../../actions/list'
import VideoIndexItem from '../browse/videos_index/video_index_row/video_index_item/video_index_item'
import { fetchVideos } from '../../actions/videos'
class myList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            clicked: false,
            searchInput: ""
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }


    handleClick() {
        this.setState({ clicked: !this.state.clicked })
    }

    componentDidMount() {
        this.props.fetchVideos()
        this.props.fetchList()
    }


    render(){
        let list;
        let display;
        list = this.props.list.map((movie, idx) => {
            return (
                <VideoIndexItem key={`key-${idx}`} video={movie} />
            )
        })
        let filteredMovies = this.props.videos.filter((video, idx) => {
            return video.title.toLowerCase().includes(this.state.searchInput.toLowerCase())
        })

        let movies;
        movies = filteredMovies.map((movie, idx) => {
            return (
                <VideoIndexItem key={`key-${idx}`} video={movie} />
            )
        })

        if (this.state.searchInput !== ""){
            display = <div className="search-results">
                <h1 className="list-header">Explore titles related to: {`${this.state.searchInput}`}</h1>
                <div className="list-results">
                {movies}
                </div>
            </div>
        } else {

            display = (
                <div className="search-results">
                    <h1 className="list-header">My List</h1>
                    <div className="list-results">
                    {list}
                    </div>
                </div >
            )
        }
        let klass;
        if (this.state.clicked) {
            klass = "open-search-bar"
        } else {
            klass = "closed-search-bar"
        }

        return (
            <div className="browse">
                <div className="search-bar-div">
                    <button className={`search-button-${klass}`}><img src={window.searchUrl} onClick={this.handleClick} alt="" /></button>
                    <input className={klass} type="input" onChange={this.handleChange("searchInput")} value={this.state.searchInput} />
                </div>
                {display}
            </div >
        )
    }



}

const mstp = (state, ownProps) => {
    return {
        videos: Object.values(state.entities.videos),
        list: Object.values(state.entities.list)
    }
}


const mdtp = (dispatch) => {
    return {
        fetchList: () => dispatch(fetchList()),
        fetchVideos: () => dispatch(fetchVideos()),
    }
}

export default connect(mstp, mdtp)(myList)
