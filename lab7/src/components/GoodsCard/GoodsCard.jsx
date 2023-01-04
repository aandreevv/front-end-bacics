import React from "react";
import "./GoodsCard.css";

function GoodsCard({imgSrc, name, price}) {
    return (
        <div className="card">
            <img className="card__image" src={imgSrc} alt={name}/>
            <p>{name}</p>
            <p>₴{price}</p>
        </div>
    );
}

export default GoodsCard;
