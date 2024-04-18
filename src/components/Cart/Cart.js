import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const cartItems=<ul className={classes['cart-items']}>{[
    {id:'c1',name:'sushi',amount:2,price:12.99}].map((item)=><li>{item.name}</li>)
}</ul>;
//wrapping jsx in unorderedlsit
//take an item from items and map that item into li 

//receive onclose props which triggeres when u click on the close button
//onclose i just a props received in cart.js from app.js actual onclose is defined in app.js file
const Cart=props=>{
return(
    
    <Modal onClose={props.onClose}>
        {cartItems}
    
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.77</span>
    </div>

    <div className={classes.actions}>
        <button className={classes['buttton---alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
    </div>

    </Modal>
);

};
export default Cart;