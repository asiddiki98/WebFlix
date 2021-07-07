
<div align="center">
  <img src="https://github.com/asiddiki98/WebFlix/blob/main/app/assets/images/logo.png" width="400" height="100" />
</div>

 ## Background and Overview
  Webflix is a movie streaming platform inspired by the already existing popular streaming platform Netflix. Navigate to [Webflix](https://webflix-aa.herokuapp.com/#/) to view your favorite movies and tv-shows. This project was built within two weeks using the Ruby on Rails for the backend and Javascript, React/Reduc for the frontend state management and UI.
  
  ### [Live Site](https://webflix-aa.herokuapp.com/#/)
  
 ## Features 
 * Frontend/ Backend User Auth

<div align="center">
  <img src="https://im6.ezgif.com/tmp/ezgif-6-16d4dd7bb1a6.gif" alt="userauth" width="600" style="vertical-align:middle">
</div>

 * Video Index has selection of movies split into genres
                          
<div align="center">
  <img src="https://im6.ezgif.com/tmp/ezgif-6-bc148f5ad851.gif" alt="video index" width="600" style="vertical-align:middle">
</div>

 * User has ability to preview on hover 
  
<div align="center">
  <img src="https://im6.ezgif.com/tmp/ezgif-6-597fe29bffe6.gif" alt="video index" width="600" style="vertical-align:middle"/>
</div>
 
 * User can create/read/update/destroy items in their watchlist.
 
<div align="center">
  <img src="https://im6.ezgif.com/tmp/ezgif-6-bcd2518d5afd.gif" alt="list" width="600" style="vertical-align:middle"/>
</div>
 
 * User can dynamically search webflix for their favorite movies.

<div align="center">
  <img src="https://im6.ezgif.com/tmp/ezgif-6-b95f509332eb.gif" alt="list" width="600" style="vertical-align:middle"/>
</div>

 * User can view movie details.
 
 <div align="center">
  <img src="https://im6.ezgif.com/tmp/ezgif-6-171b51d29c2b.gif" alt="list" width="600" style="vertical-align:middle"/>
</div>
 
 * Video show page.

<div align="center">
  <img src="https://im6.ezgif.com/tmp/ezgif-6-0334847eea6f.gif" alt="list" width="600" style="vertical-align:middle"/>
</div>

  ## Technologies and Challenges
  
  ### Stack
  * PostgreSQL as the database
  * Ruby on Rails for the backend
  * Javascript for the frontend
  * Redux for state management
  * React for user interface
  * CSS 3 for styling
  
  ### Code Snippets
   There were several challenges I faced while trying to create the search functionality. My main issue was that it was difficult for me to dynamicallly change the display of the browse section to show the search results in realtime. I was able ot solve this issue by taking the search component out of the nav bar and putting into the browse component, while using clever CSS styling to give the effect that the search is in the nav bar.
  ```javascript
  render (){
        let display;
        let filteredMovies = this.props.videos.filter((video,idx) => {
            return video.title.toLowerCase().includes(this.state.searchInput.toLowerCase()) || video.genres.join(" ").toLowerCase().includes(this.state.searchInput.toLowerCase())
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
  ```
  
  As you can see the displayed results change depending on whether there is any input in the search bar, which is a clevere work around to my unique issue that I was facing.
  
  
  
