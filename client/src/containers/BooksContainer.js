import React, {Component} from 'react'
import Books from '../components/Books'
import { connect } from 'react-redux'



class BooksContainer extends Component {

    render(){
        return(
            <div>
            {/* {this.props.greeting} */}
            <Books books={this.props.books} />
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        books: state.books,
        //greeting: "Hello World"
    }
}



export default connect(mapStateToProps)(BooksContainer)