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
                                        <LikeContainer book={book} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                    {/* <img src={book.image}  className="card-img-top" alt={`${book.image}-pic`}/>
                    <h1 className='card-title'><strong>{book.title}</strong></h1>
                    <h4 className="card-text"> Author: <strong>{book.author}</strong></h4>
                    <h4 className="card-text"> Description: <strong>{book.description}</strong></h4>
                
                    <h4 className="card-text lg-col"> <em>Likes:</em> <strong>{book.likes}</strong></h4> */}
                    
                    

                </CardContent>
            </BookCard>
            </div>
        )
    }

}

//convert to functional component-


export default Book