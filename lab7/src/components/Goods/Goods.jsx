import React from "react";
import GoodsCard from "../GoodsCard/GoodsCard";
import goods from "./GoodsData";
import "./Goods.css";

function Goods() {
    return (
        <div className="goods">
            {goods.map(good => <GoodsCard imgSrc={good.imgSrc} name={good.name} price={good.price}/>)}
        </div>
    )
}

export default Goods;
