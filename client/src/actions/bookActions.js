//1. We have a function of fetchbooks, which is returning the function that takes in dispatch as a parameter.
export const fetchBooks = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_BOOKS'})
        return fetch('http://localhost:3001/books')
        //response is going to be a promise that is going to be resolved to us
            .then(response => {
                return response.json()
                //json stand for JavaScript Object Notation
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
    //returning a function that takes in dispatch as a parameter
        return fetch('http://localhost:3001/books', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ book })
            //book is going to be a key and book is going to be a value of the key because of scaffold and strong param.
        })
        // after we get our response from the fetch, we are going to parse the response.
        .then(response => response.json())
        //then we are going to have a book that is given to us.
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

