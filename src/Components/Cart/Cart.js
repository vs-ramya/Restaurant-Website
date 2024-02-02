import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
    // Define the meal item object
    const mealItems = [{ id: 'm1', name: 'Briyani', amount: '3', price: '300' }];

    // Map over the meal items to create list items
    const mealItemList = mealItems.map(mealItem => (
        <li key={mealItem.id}>{mealItem.name}</li>
    ));
// the reason why we can't use usecontext eventhough we have lots of props chaining is we need to be more specific
//if we use usecontext we r not allowed to reuse the modal if we use usecontext
    return (

     <Modal onClose={props.onClose}>
        {/* the above onClose prop is from Modal  */}
            <div>
                {/* Render the list of meal items */}
                <ul className={classes['cart-items']}>
                    {mealItemList}
                </ul>
                {/* Static total amount */}
                <div className={classes.total}>
                    <span>Amount</span>
                    <span>300</span>
                </div>
                <div className={classes.actions}>
                    <button className={classes['button--alt']} onClick={props.onClose}>Cancel</button>
                    <button className={classes.button}>Order</button>
                </div>
            </div>
        </Modal>
    );
};

export default Cart;
