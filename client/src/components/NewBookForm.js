import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addNewBook } from '../actions/bookActions'

class NewBookForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            title: '',
            author: '',
            image: '',
            likes: '',
            description: ''

        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log('a')
        this.props.addNewBook( {
            ...this.state,
            likes: 0
        }, this.props.history )
        console.log('b')
    }

    render() {
        return(
            <div className="wrapper">
                <form className='book-form' onSubmit={this.handleSubmit}>
                    <div className='input-fields'>

                        <input type="text" className="input" name="title" id="title" placeholder="Book Title" value={this.state.title} onChange={this.handleChange} />

                        <input type="text" className="input" name="author" id="author" placeholder="Author" value={this.state.author} onChange={this.handleChange} />

                        <input type="text" className="input" name="description" id="description" placeholder="Description" value={this.state.description} onChange={this.handleChange} />

                        <input type="text" className="input" name="image" id="image" placeholder="Image of Book" value={this.state.image} onChange={this.handleChange} />
                    </div>

                    <input type="submit" value="Create Book" className="submit-btn" />
                </form>
            </div>
            


            
            
        );
    }
}

export default connect(null, { addNewBook })(NewBookForm)