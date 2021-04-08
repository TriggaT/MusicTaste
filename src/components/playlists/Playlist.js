import React, { Component } from 'react'
import SongsContainer from "../../containers/SongsContainer";
import ReviewsContainer from "../../containers/ReviewsContainer";
import {getPlaylists} from '../../actions/index'
import {connect} from 'react-redux'

class Playlist extends Component {
    componentDidMount = () => {
        this.props.getPlaylists()
    }

    render() {
        const {playlists, match, songs, reviews} = this.props;
        const playlist = playlists.find(p => p.id === parseInt(match.params.playlistId));

        const associatedSongs = songs.filter(song => song.playlist_id === playlist.id);
        const associatedReviews = reviews.filter(review => review.playlist.id === playlist.id);


        if (!!playlist){
        
            return (
                <>
                <h3>{playlist.name} created by {playlist.user.username} </h3>
                <h4>{playlist.description}</h4>
                <SongsContainer songs={associatedSongs} playlistId={playlist.id} match={match}/> 
                <ReviewsContainer reviews={associatedReviews} playlistId={playlist.id} match={match}/>

                </>
            )
        }

        return (
            <h4>Loading...</h4>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        playlists: state.playlists,
        loading: state.loading
    }
}

export default connect(mapStateToProps, {getPlaylists})(Playlist)
