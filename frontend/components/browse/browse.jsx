import React from 'react'
import VideoIndexContainer from './videos_index/videos_index_container';
import Mute from './mute'
import { Link } from 'react-router-dom';
import VideoIndexItem from './videos_index/video_index_row/video_index_item/video_index_item.jsx'
// import SearchBar from '../nav_bar/searchbar'



class Browse extends React.Component{
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


    componentDidMount(){
        this.props.fetchVideos()
        this.props.fetchList() 
    }
    delete(main) {
        let list = {
            video_id: main.id,
            user_id: this.props.currentUser.id
        }
        // this.props.addToList(list)
        this.props.deleteFromList(list)
        // this.props.fetchList().then( )
    }
    add(main) {
        let list = {
            video_id: main.id,
            user_id: this.props.currentUser.id
        }
        this.props.addToList(list)
        // this.props.deleteFromList(list)
        // this.props.fetchList().then( )
    }

    render (){
        let display;
        let filteredMovies = this.props.videos.filter((video,idx) => {
             return video.title.toLowerCase().includes(this.state.searchInput.toLowerCase())
        })

        let movies;
         movies = filteredMovies.map((movie, idx) => {
            return (
                <VideoIndexItem  key={`key-${idx}`} video={movie}/>
            )
         })

        if (this.props.videos[0] && this.state.searchInput === "" && this.props.location.pathname === "/browse"){
           let main = this.props.videos[this.props.videos.length-1];
    
            display = (
            
                <div className="browse-display-div">
                    
                    <video 
                    id="main-video"
                    className="main-video" 
                    src={main.videoUrl} 
                    poster={main.photoUrl} 
                    controls={false} 
                    // onMouseOver={this.handleMouseIn()}
                    // onMouseOut={this.handleMouseOut()}
                    autoPlay
                    muted
                    loop
                    >

                    </video >
                        <div className="main-vid-info">
                            <h1 className="main-video-title">{main.title}</h1>
                            <p className="main-video-collection">{main.genres[0].charAt(0).toUpperCase() + main.genres[0].slice(1) + ' Collection'}</p>
                            <p className="main-video-description">{main.description}</p>
                            <Link to={`/video/${main.id}`}><button className="main-video-play">Play</button></Link>
                        {this.props.list.includes(String(main.id)) ? <button onClick={() => this.delete(main)} className="main-video-add-to-list"> &#x2714; My List</button> : <button onClick={() => this.add(main)} className="main-video-add-to-list">Add to List</button>}
                          
                        </div>
                    <Mute video="main"/>
                    <VideoIndexContainer videos={this.props.videos} />

                </div >
            );
        } else if (this.props.videos[0] && this.state.searchInput !== ""){
            display = <div className="search-results">
                <h1 className="list-header">Explore titles related to: {`${this.state.searchInput}`}</h1>
                <div className="list-results">
                    {movies}
                </div>
            </div>
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
            </div>
        )
    }
}

export default Browse