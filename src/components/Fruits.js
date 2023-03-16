import React from 'react';

function Fruits(fruitImage, labelTag, fruitName, currentAmount) {
    return (
        <article className="fruit">
            <img src={fruitImage} alt ="image-of-fruit"/>
            <label htmlFor={labelTag}>
             {fruitName}
            </label>
            <button id="minus-button" type="text" placeholder="-">
             </button>
            <p> {currentAmount}</p>
            <button id="plus-button" type="text" placeholder="+">
            </button>
        </article>
    );
}
// hoe de buttons maken?


export default Fruits;