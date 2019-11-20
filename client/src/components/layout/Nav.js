import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Nav extends Component {
    render() {
        return(
            <nav className='navbar-header'>
                <div className='nav-container'>
                    <ul className="navbar navbar-expand-lg">
                        <li className="nav-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/books">View all of the books</Link>
                        </li>
                       
                        <li className='nav-item'>
                            <Link to="/books/new">Add a new Book</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav