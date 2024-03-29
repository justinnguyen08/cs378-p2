import React from 'react';

const MenuItem = ({ id, title, description, imageName, price }) => {
    return (
        <div className="food">
            <img src={`${process.env.PUBLIC_URL}/images/${imageName}`} className="item-image" alt={title} />
            <div className="item-info">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className="button-container">
                <p className="price">${price}</p>
                <button className="button">Add</button>
            </div>
        </div>
    );
};

export default MenuItem;
