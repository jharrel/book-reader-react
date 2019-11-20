import React from 'react'

const BookDelete = props => {
  return (
    <div>
      <span>{props.book.text}</span><button onClick={() => props.delete(props.book.id)}>DELETE</button>
    </div>
  )
}

export default BookDelete;