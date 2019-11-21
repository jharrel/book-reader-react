const removeBook = id => ({
    type: 'DELETE_BOOK',
    id,
  });

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
    console.log('c')
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
            console.log('d')
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

export const updateBooks = (book, actionType) => {
    return (dispatch) => {
        return fetch(`http://localhost:3001/books/${book.id}`, {
            method: 'UPDATE',
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

export const deleteBook = id => dispatch => fetch(`localhost:3001/books/${id}`, {
    method: 'DELETE',
  })
    .then((response) => {
      if (response.ok) {
        dispatch(removeBook(id));
      } else {
        window.alert('Unable to delete');
      }
    })
    .catch(error => console.log(error));
