import React, {Component} from 'react'
import Book from './Book'

class Books extends Component {
    render() {
        const booksList= this.props.books.map( book => {
            return (
                <Book key={book.id} book={book} />    
            )   
        })

        return(
            <div>
                { booksList }  
            </div>
        )
    }
}

export default Books