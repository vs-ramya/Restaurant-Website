import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = () => {
    // Define the meal item object
    const mealItems = [{ id: 'm1', name: 'Briyani', amount: '3', price: '300' }];

    // Map over the meal items to create list items
    const mealItemList = mealItems.map(mealItem => (
        <li key={mealItem.id}>{mealItem.name}</li>
    ));

    return (
        <Modal>
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
                    <button className={classes['button--alt']}>Cancel</button>
                    <button className={classes.button}>Order</button>
                </div>
            </div>
        </Modal>
    );
};

export default Cart;
