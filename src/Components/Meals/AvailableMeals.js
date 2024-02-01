import classes from './AvailableMeals.module.css';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Chicken Briyani',
      description: 'Delicious food bounded with masala',
      price: 'Rs.380',
    },
    {
      id: 'm2',
      name: 'Chicken Momos',
      description: 'Pocket full of chicken',
      price: 'Rs.200',
      
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 'Rs.350',
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 'Rs.400',
    },
  ];
  const AvailableMeals=(() => {
    const Menu=DUMMY_MEALS.map(meal => <li>{meal.name}</li> )
    return (
        <div class={classes.meals}>
            <ul>
                {Menu}
            </ul>
        </div>
    )

  })
  export default AvailableMeals;