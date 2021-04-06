import React, { Component } from 'react'
import {getPlaylists} from '../actions/index'
import {Route} from 'react-router-dom';
import Playlist from "../components/Playlist"
import ListPlaylists from "../components/ListPlaylists"
import {connect} from 'react-redux'
import PlaylistForm from '../components/PlaylistForm';

export class PlaylistsContainer extends Component {
    componentDidMount = () => {
        this.props.getPlaylists()
    }

    render() {
        return (
            <div>
                <Route exact path="/playlists/new" component={<PlaylistForm />} />
                <ListPlaylists playlists={this.props.playlists} /> 
                {/* <Route exact path={this.props.match.url} render={() => <h4>Choose any of the above playlist</h4>}/> */}
                <Route path={`${this.props.match.url}/:playlistId`} render={routerProps => <Playlist {...routerProps} playlists={this.props.playlists} /> }/>
            
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        playlists: state.playlists
    }
}


export default connect(mapStateToProps, { getPlaylists })(PlaylistsContainer)


