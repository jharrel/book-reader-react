import React, { Component } from 'react'
import BookCard from './BookCard'
import CardContent from './CardContent'

import LikeContainer from '../containers/LikeContainer'


export class Book extends Component {
    render(){
        const {book} = this.props

        return(
        
            <BookCard>
                <CardContent>
                    <img src={book.image}  className="card-img-top" alt={`${book.image}-pic`}/>
                    <h1 className='card-title'><strong>{book.title}</strong></h1>
                    <h4 className="card-text"> <em>Author</em> <strong>{book.author}</strong></h4>
                    <h4 className="card-text"> <em>Location:</em> <strong>{book.read}</strong></h4>
                    {/* <h4 className="card-text"> <em>Temperament:</em> <strong>{book.temperament}</strong></h4> */}
                    <br/>
                    <h4 className="card-text lg-col"> <em>Likes:</em> <strong>{book.likes}</strong></h4>
                    

                    
                    <LikeContainer book={book} />
                </CardContent>
            </BookCard>
    
        )
    }

}

//convert to functional component-


export default Book