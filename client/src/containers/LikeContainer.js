import React, { Component } from 'react'
import IncreaseLikeButton from '../components/likeComponents/increaseLikeButton'
import DecreaseLikeButton from '../components/likeComponents/decreaseLikeButton'
import { connect } from 'react-redux'
import { updateLikes } from '../actions/bookActions'

export class LikeContainer extends Component {

    handleIncrement = () => {
        let increaseLikes = this.props.book.likes + 1
        let updatedBook = {
            ...this.props.book,
            likes: increaseLikes
        }
        this.props.updateLikes(updatedBook, 'INCREASE_LIKES')
        
    }

    handleDecrement = () => {
        let decreaseLikes = this.props.book.likes - 1
        let updatedBook = {
            ...this.props.book,
            likes: decreaseLikes
        }
        this.props.updateLikes(updatedBook, 'DECREASE_LIKES')
    }
    render(){
        return(
            <div>
            <IncreaseLikeButton handleIncrement={this.handleIncrement} />
            <DecreaseLikeButton handleDecrement={this.handleDecrement} />
            </div>
        )
    }
}




    

export default connect(null,{ updateLikes })(LikeContainer)