import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css';
import { fetchBooks } from './actions/bookActions';
import BooksContainer from "./containers/BooksContainer"
import NewBookForm from "./components/NewBookForm"

import Header from "./components/layout/Header"
import Nav from "./components/layout/Nav"
import Home from "./components/layout/Home"
import Errors from "./components/layout/Errors"

import '../node_modules/bootstrap/dist/css/bootstrap.css.map'
class App extends Component {
 
  
  componentDidMount() {
    console.log(this.props)
    //this.props.greeting();
    this.props.fetchBooks()
  }


  render(){
    return (
    <Router>
      <Nav />
      <Header />
      <div className ="App">
        <div className='container'>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/books/new" component={NewBookForm} />
            <Route exact path="/books" component={BooksContainer} />
            <Route component={Errors} />
          </Switch>
        </div>
      </div>
      </Router>
      
      )
  }
}



const mapDispatchToProps = dispatch => {
  return {
    fetchBooks: () => dispatch(fetchBooks()),
    greeting: () => console.log('hello world')
  }
}

export default connect(null, mapDispatchToProps)(App)
