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
            <div className='books-list'>
                <img src='https://fontmeme.com/permalink/191108/ca6621049565d7a4a27985c547fd7988.png' alt='list-custom-font' className='list-custom-font'/>
               
                { booksList }
               
            </div>
        )
    }
}

export default Books