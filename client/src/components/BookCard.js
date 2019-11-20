import React, { Component } from 'react'


export class BookCard extends Component {
    render() {
        return(
            <div >
                {this.props.children}
            </div>
        )
    }
}

export default BookCard