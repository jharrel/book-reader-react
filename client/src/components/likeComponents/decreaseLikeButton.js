import React from 'react'

const DecreaseLikeButton = (props) => {
        return(
            <div>
                <button className='btn btn-danger btn-lg ' onClick={props.handleDecrement}> Likes -1</button>
            </div>
        )
}
    
    
export default DecreaseLikeButton   