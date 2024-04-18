import { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';


const HeaderCartButton=(props)=>{
  const cartCtx= useContext(CartContext);// pass cartcontext obj to usecontext
   //cartcontext is managed by closest provider ie cartprovider

   //onclick is props received through header.js se we handle onclick here
const numberofcartitems=cartCtx.items.reduce((curNumber,item)=>{//curNumber is different for everyitem we calling it+-*
   return curNumber+item.amount;
},0);
   //cartctx.items.length used to get number of cartitems added,
   //but when we addd 3 sushi to cart only 1 will be added to cart but we added 3 meals to cart ,so change logic
return( 
      <button className={classes.button} onClick={props.onClick}>
    <span className={classes.icon}>
       <CartIcon/> 
    </span>
    <span>Your Cart</span>
    <span className={classes.badge}>{numberofcartitems}</span>
</button>
);
};
export default HeaderCartButton;