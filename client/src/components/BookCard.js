import React, { Component } from 'react'


export class BookCard extends Component {
    render() {
        return(
            <div className='card-body' >
                {this.props.children}
            </div>
        )
    }
}

export default BookCard