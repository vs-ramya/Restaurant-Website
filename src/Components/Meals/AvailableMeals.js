import MealItems from '../MealItems/MealItems';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Chicken Briyani',
      description: 'Delicious food bounded with masalas',
      price: 'Rs.380',
    },
    {
      id: 'm7',
      name: 'Fish Meals',
      description: 'Healthy fish meals with fresh taste',
      price: 'Rs.700',
    },
    {
      id: 'm8',
      name: 'Tandoori Chicken',
      description: 'Juicy chicken with blended masalas ',
      price: 'Rs.500', 
    },
    
      {
        id: 'm9',
        name: 'Chicken Pasta',
        description: 'Juicy pastas blended with Mexican sauce ',
        price: 'Rs.320', 
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
        id: 'm10',
        name: 'Chicken Wrap',
        description: 'Wrapped with full of meats inside ',
        price: 'Rs.500', 
      },

    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 'Rs.400',
    },
    
    {
    id: 'm6',
      name: 'Parottas',
      description: 'Flaky and softy parotta with salna',
      price: 'Rs.50',
    },
  ];
  const AvailableMeals=(() => {
    const Menu=DUMMY_MEALS.map(meal => <li>
      <MealItems
       key={meal.key}
       name={meal.name} 
       description={meal.description} 
       price={meal.price}/>
       </li> )
    return (
        <div class={classes.meals}>
          <Card>
            <ul>
                {Menu}
               
            </ul>
            </Card>
        </div>
    )

  })
  export default AvailableMeals;