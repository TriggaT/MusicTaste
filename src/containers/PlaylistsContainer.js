import React, { Component } from 'react'
import {getPlaylists} from '../actions/index'
import {getSongs} from '../actions/index'
import {Switch, Route} from 'react-router-dom';
import Playlist from "../components/Playlist"
import ListPlaylists from "../components/ListPlaylists"
import {connect} from 'react-redux'
import PlaylistForm from '../components/PlaylistForm';
import { NavLink } from 'react-router-dom';


export class PlaylistsContainer extends Component {
    componentDidMount = () => {
        this.props.getPlaylists()
        this.props.getSongs()
    }

    render() {
        return (
            <div>
                <ListPlaylists playlists={this.props.playlists} /> 
                <br />
                <NavLink  to="/playlists/new">New Playlist</NavLink>

                <Switch>
                <Route path="/playlists/new" component={PlaylistForm} />
                <Route path={`${this.props.match.url}/:playlistId`} render={routerProps => <Playlist {...routerProps} playlists={this.props.playlists} songs={this.props.songs} /> }/>
                </Switch>
   
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        playlists: state.playlists,
        songs: state.songs
    }
}


export default connect(mapStateToProps, { getPlaylists, getSongs })(PlaylistsContainer)


