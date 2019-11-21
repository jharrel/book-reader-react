import React, {Component} from 'react'
import Book from './Book'

class Books extends Component {
    handleDelete = itemId => {
        const items = this.state.items.filter(item => item.id !== itemId);
        this.setState({ items: items });
      };
      
    render() {
        console.log('e')
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