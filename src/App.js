import React,{ Fragment,useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const[cartIsShown,setCartisShown]=useState(false);

  const showCartHandler=()=>{//showcartHandler should be called when ever YOUR CART BUTTON IS CLICKED
    setCartisShown(true);
  };

  const hideCartHandler=()=>{
    setCartisShown(false);
  };
  //{} used for evaluating dynaic expression
     // {cartIsShown && <Cart/>} this renders cart if cartisshown is true ,otherwise it doesnt show cart
     //if cariisshown is false,we set false initally anyways

  return (
    <Fragment>
     {cartIsShown && <Cart onClose={hideCartHandler}/>} 
      <Header onShowCart={showCartHandler} />
     <main>
      <Meals/>
     </main>
      </Fragment>
  );
}

export default App;
