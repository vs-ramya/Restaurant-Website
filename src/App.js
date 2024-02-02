import React, { Fragment,useState } from 'react';
import Cart from './Components/Cart/Cart';

import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';


function App() {
  const [cart, setcart] = useState(false);
  function showCartHanndler() {
    setcart(true);

  }
  function closeCartHandler() {
   setcart(false);
  }
  return (
  <Fragment>
  
 
 {/* the below code renders the cart component if it is true from the state and didn't show if it is false*/}
{cart && <Cart onClose={closeCartHandler}/> }
{/*Now showcarthandler is a part of the headercomonent so use it there*/}
<Header onclick={showCartHanndler}/>
 <main>
  <Meals/>

 </main>
 
 </Fragment>
    )
}

export default App;
