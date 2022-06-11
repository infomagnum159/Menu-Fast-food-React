import React from 'react';
import './Order.css';
const Order = props => {
    if (props.count > 0) {
        return (
            <li>
                <p className="name">{props.name}
                <span className="quantity">x{props.count}</span>
                </p>
                <span className="price">{props.price} KGS</span>
                <span className="erase" onClick={()=>props.onDecrease(props)}>&#10008;</span>

            </li>
        );
    } else {
        return null;
    }
};

export default Order;