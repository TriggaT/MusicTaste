import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux'
import {getPlaylists} from '../actions/index'
import {Route} from 'react-router-dom';
import Playlist from "./Playlist"

class Playlists extends Component {
    componentDidMount = () => {
        this.props.getPlaylists()
    }


    render() {
        return (
            <div>
                 {/* <Route path="/playlists/:id" component={({match}) => <Playlist {...props} /> }/> */}
                {this.props.playlists.map(playlist => 
                    <NavLink to={`/playlists/${playlist.id}`}>{playlist.name}</NavLink>)} 
                
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        playlists: state.playlists
    }
}


export default connect(mapStateToProps, { getPlaylists })(Playlists)
