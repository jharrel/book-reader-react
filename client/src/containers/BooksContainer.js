import React, {Component} from 'react'
import Books from '../components/Books'
import { connect } from 'react-redux'



class BooksContainer extends Component {

    render(){
        return(
            <div>
            {/* rendering books components and passing down this.props.books */}
            {/* prop (books=) */}
            <Books books={this.props.books} />
            </div>
        )
    }

}
const mapStateToProps = booksReducer => {
    return {
        //key of books 
        books: booksReducer.books,
    }
}


export default connect(mapStateToProps)(BooksContainer)