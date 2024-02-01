
import classes from './MealItems.module.css';

const MealItems=((props)=> {
    return(
            <li className={classes.meal}>
             <div>
            <div className={classes.name}><h3>{props.name}</h3></div>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{props.price}</div>
            </div>
            </li>
        

    )

})
export default MealItems;