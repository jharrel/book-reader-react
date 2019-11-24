import React, {Component} from 'react'
import Book from './Book'

class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortBy: ''
        }
    }

    handleClick = () => {

        this.setState({
            sortBy: "likes"
        })
    }
   
    booksList = (books) => books.map( book => {
        return (
            <Book key={book.id} book={book} />    
        )   
    })

    sortBooksByLikes = () => {
        return this.props.books.slice().sort((a, b) => b.likes - a.likes )

    }

    renderBooks = () => {
        if (this.state.sortBy === "") {
            return this.booksList(this.props.books)
        } else {
            return this.booksList(this.sortBooksByLikes())
        }
    }

    render() {
        console.log('e')        
        return(
            <div>

          <button value={ this.state.likes } onClick={this.handleClick}> Sort By Likes </button>
                { this.renderBooks() }  
            </div>
        )
    }
}

export default Books