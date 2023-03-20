import React from 'react';
import Button from "./Button";

function FruitCounter({fruitAmount, setFruitAmount}) {
    return (
        <>
            <Button type="button"  disabled={fruitAmount===0} clickHandler={()=> setFruitAmount(fruitAmount -1 )}>
                -
            </Button>
            <p> {fruitAmount} </p>
            <Button type="button"  clickHandler={()=> setFruitAmount(fruitAmount + 1)}>
                +
            </Button>

        </>
    );
}


export default FruitCounter;