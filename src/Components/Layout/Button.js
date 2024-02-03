import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import Cart_context from "../../Store/Cart_context";
import classes from './Button.module.css';
const Button=((props)=> {
    const ctx=useContext(Cart_context);
    //This button component get updated whenever we changes or updates the context provider component
    //reduce is a build in method which allows us toconert the array of datas into single value
   
    const numberofCartItems=ctx.item.reduce((currentNumber,item)=> {
        return currentNumber+item.Amount;


    },0)
    //Starting value of the cart is 0 that's why we used 0 here to initial 
    return(
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}><CartIcon/></span>
            <span>Cart </span>
            <span className={classes.badge}>{numberofCartItems}</span>
        </button>
    )


})
export default Button;