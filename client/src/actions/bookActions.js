export const fetchBooks = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_BOOKS'})
       return fetch('http://localhost:3001/books')
            .then(response => {
                return response.json()
            })
            // .then(responseJSON => {
            //     console.log(responseJSON)
            // })
            .then(responseJSON => {
                dispatch({type: 'ADD_BOOKS', books: responseJSON })
            })
    }
}

export const addNewBook = ( book, history ) => {
    return dispatch => {
        return fetch('http://localhost:3001/books', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ book })
        })
        .then(response => response.json())
        .then(book => {
            dispatch({ type: 'ADD_NEW_BOOK', book })
            //making sure my promise is resolved before redirect
            history.push('/books')
            //to make sure front end store has updated
        })

    }
}

export const updateLikes = (book, actionType) => {
    return (dispatch) => {
        return fetch(`http://localhost:3001/books/${book.id}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'likes': book.likes
            })
        })
            .then(response => {
                return response.json()
            })
            .then(book => {
                dispatch({type: actionType, book})
            })
    }
}

export const deleteBooks = (book, history) => {
   
    const deleteBook = {
       method: 'DELETE',
       headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
       }
    }
    return (dispatch) => {
        dispatch({type: "DELETE_BOOKS"})
        fetch(`http:localhost:3001/books/${book.id}`, deleteBook)
           .then(resp => resp.json())
           .then(() => {
              dispatch({type: "DELETE_BOOKS", book: book})
              history.push('/books')
           })
     }
  }
  