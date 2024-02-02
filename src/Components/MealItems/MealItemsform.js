import classes from './MealItemsForm.module.css';
import Input from '../UI/Input';
const MealItemsForm=((props)=> {
    //Label for amount and the input with default value
    return (

            <form class={classes.form}>
                 <Input label="Amount" input={{
                 type:'text',
                 min:'1',
                 max:'5',
                 step:'1',
                 defaultValue:'1'
            }}
            />
                <button>+ Add</button>
           
            </form>
    )

})
export default MealItemsForm;