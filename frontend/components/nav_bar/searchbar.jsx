import React from 'react'
import { connect } from 'react-redux'
import { fetchVideos } from '../../actions/videos'


class Searchbar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            clicked: false,
            searchInput: ""
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState({clicked: !this.state.clicked})
    }

    componentDidMount(){
        this.props.fetchVideos()
    }

    render(){   
        let klass;
        if (this.state.clicked){
            klass = "open-search-bar"
        }  else {
            klass = "closed-search-bar"
        }
        return (

        <div className="search-bar-div">
            <button className={`search-button-${klass}`}><img src={window.searchUrl} onClick={this.handleClick} alt=""/></button>
            <input className={klass} type="input" />
        </div>
        )
    }
}

const mstp = state => {
    return {
        videos: state
    }
}

const mdtp = dispatch => {
    return {
        fetchVideos : () => dispatch(fetchVideos())
    }
}

export default connect(mstp, mdtp)(Searchbar)