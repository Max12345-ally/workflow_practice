import React from 'react';


const Compliments = (props) => {
    return(
        <h2>{props.compliment[Math.floor(Math.random() * props.compliment.length)]}</h2>
    )
}

export default Compliments