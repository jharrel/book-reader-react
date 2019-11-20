const bookReducer = (state = { books: [],loading: false }, action) => {
    switch(action.type){
        case 'LOADING_BOOKS':
            return {
                ...state,
                loading: true
            }
        
        case 'ADD_BOOKS':
            return {
                ...state,
                books: action.books,
                loading: false 
            } 
            
        case 'ADD_NEW_BOOK':
            return {
                ...state,
                books: [...state.books, action.book]
            }
        case 'INCREASE_LIKES':

            return{
                ...state,
                books: state.books.map(book => {
                    return book.id === action.book.id ? action.book : book
                })
            }
        case 'DECREASE_LIKES':
            return {
                ...state,
                books: state.books.map(book => {
                    return book.id === action.book.id ? action.book : book
                })
            }

        default:
            return state
    }
}

export default bookReducer