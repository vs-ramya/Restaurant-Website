import classes from './Input.module.css';
const Input=((props)=> {
    //props are from MealItemForm components
    return (
        <div class={classes.input}>
            <label>{props.label}</label>
            <input {...props.input}/>
        </div>

    )
})
export default Input;