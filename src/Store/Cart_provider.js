import Cart_context from './Cart_context.js'; 

const Cart_provider=(props)=>{
    const additemstoCartHandler=()=> {

    }
    const removeitemstoCartHandler=()=> {

    }
    const Cart_ontext={
    item:[],
    totalAmount:0,
    addItem:additemstoCartHandler,
    removeItem:removeitemstoCartHandler
}

    return(
        <Cart_context.Provider value={Cart_ontext}>
            {props.children}
        </Cart_context.Provider>
    )
    

}
export default Cart_provider;