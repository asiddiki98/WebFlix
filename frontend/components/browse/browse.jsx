import React from 'react'
import VideoIndexContainer from './videos_index/videos_index_container';
import Mute from './mute'


class Browse extends React.Component{
    constructor(props){
        super(props)

      
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
    }

    getRandomVideo(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        let ans =  Math.floor(Math.random() * (max - min + 1) + min);

        return ans
    }

    render (){
        let display;
        if (this.props.videos[0]){
           let main = this.props.videos[this.getRandomVideo(0, (this.props.videos.length -1))];
    
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
                            <button className="main-video-play">Play</button>
                            <button className="main-video-add-to-list">Add to List</button>
                          
                        </div>
                    <Mute mainVideo={main}/>

                        
                    <VideoIndexContainer videos={this.props.videos} />

                </div >
            );
        } else {
            display = (
                <div>
                    <VideoIndexContainer videos={this.props.videos}  />
                </div >
            )
        }
        return (
            <div className="browse">
             {display}
            </div>
        )
    }
}

export default Browse