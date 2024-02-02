
import classes from './MealItems.module.css';
import MealItemsForm from './MealItemsform';

const MealItems=((props)=> {
    return(
            <li className={classes.meal}>
             <div>
            <div className={classes.name}><h3>{props.name}</h3></div>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{props.price}</div>
            
            </div>
            <div><MealItemsForm/></div>
            </li>
        

    )

})
export default MealItems;