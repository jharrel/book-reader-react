import React, { Component } from 'react'
import BookCard from './BookCard'
import CardContent from './CardContent'
import LikeContainer from '../containers/LikeContainer'


export class Book extends Component {
    render(){
        const {book} = this.props

        return(
            <div>
                <BookCard>
                    <CardContent>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 mt-3">
                                    <div className="card">
                                        <div className="card-horizontal">
                                            <div className="img-square-wrapper">
                                                <img className="image" src={book.image} alt="Card image cap" width="200" height="auto"></img>
                                            </div>
                                            <div className="card-body">
                                                <h1 className="card-title"> Title: {book.title}</h1>
                                                <h2 className="card-title">Author: {book.author}</h2>
                                                <p className="card-text">Description: {book.description}</p>
                                                <h4 className="card-text lg-col"> Likes: <strong>{book.likes}</strong></h4>
                                                
                                                <LikeContainer book={book} />
                                                
                                                {/* <button type="button" className="btn btn-lg btn-danger" >
                                                    Delete Book
                                                </button> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </BookCard>
            </div>
        )
    }
}


export default Book