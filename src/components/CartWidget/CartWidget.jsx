import React from "react";
import ItemCount from "../ItemCount/ItemCount";

export const CartWidget = () => {
    return (
        <>
        <i className="bi bi-cart"></i>
        <ItemCount/>
        </>
    );
}

export default CartWidget;
