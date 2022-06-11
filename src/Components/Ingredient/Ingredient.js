import React from 'react';
import './Ingredient.css'
const Ingredient = (props) => {
    return (
        <div className="Ingredient" onClick={props.onIncreaseClick}>
            <img className="list" src={props.image} alt="#"/>
            <div className="Block">
                <h1 className="name">{props.name}</h1>
                <p>Price: {props.price} KGS</p>
            </div>

            <hr className="hr"></hr>
        </div>
    );
};

export default Ingredient;