import React, { Component } from 'react'

class ReviewsContainer extends Component {
    render() {
        const { reviews, playlistId, match } = this.props; 

        const average = (arr) => {
            let total = 0;
            for(let i = 0; i < arr.length; i++){
                total += arr[i]
            }
            return total/arr.length
        }

        return (
            <div>
                <h4>Average Rating: {average(reviews.map(r => r.rating))} </h4>
                {reviews.map(r => {
                    <Review review={r} /> 
                })}
                
            </div>
        )
    }
}

export default ReviewsContainer
