import React from "react";
const Cart_context=React.createContext({
    item:[],
    totalAmount:0,
    addItem:(item) => {},
    removeItem:(id) => {}
})
export default Cart_context;