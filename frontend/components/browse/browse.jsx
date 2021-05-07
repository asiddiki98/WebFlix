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


    handleMouseIn() {
        return (e) => {

            e.target.play()

        }
    }

    handleMouseOut() {
        return (e) => {
            e.target.load()
            e.target.pause();
        }
        
    }

    componentDidMount(){
        this.props.fetchVideos()
        this.props.fetchList()
    }

    getRandomVideo(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        let ans =  Math.floor(Math.random() * (max - min + 1) + min);

        return ans
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

         let list;
        list = this.props.list.map((movie, idx) => {
            return (
                <VideoIndexItem key={`key-${idx}`} video={movie} />
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
                            <button className="main-video-add-to-list">Add to List</button>
                          
                        </div>
                    <Mute video="main"/>
                    <VideoIndexContainer videos={this.props.videos} />

                </div >
            );
        } else if (this.props.videos[0] && this.state.searchInput !== ""){
            display = <div className="search-results">
                {movies} 
            </div>
        }
        
        else if (this.props.location.pathname === "/my-list"){
            debugger
            display = (
                <div className="search-results">
                    {list}
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
            </div>
        )
    }
}

export default Browse