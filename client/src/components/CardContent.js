import React, { Component } from 'react'

export class CardContent extends Component {
    render(){
        return (
        //rendering the content from the className card-body which is found in book.js
        <div className="card-body">
            {this.props.children}
        </div>
        )
    }
}

export default CardContent