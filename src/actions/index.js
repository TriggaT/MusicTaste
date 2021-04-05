export const addSong = (title, artist) => ({
    type: "ADD_SONG",
    title,
    artist
})

export const getSongs = () => {
    return dispatch => {
        dispatch({ type: 'LOADING_SONGS'})
        fetch("/songs")
        .then(r => r.json())
        .then(songs => {
            dispatch({type: 'SET_SONGS', songs})}
        ) 
    }
}

export const postSong = (song) => {
    const songData = {
        title: song.title, 
        artist: song.artist
    }
    
    return dispatch => {
        fetch("/songs", {
            method: "POST", 
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(songData)
        })
        .then(r => r.json())
        .then(song => console.log(song))
    }
}