import React from 'react';
import "./Cart.scss";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useDispatch, useSelector } from 'react-redux';
import { resetCart, removeItem } from './../../redux/cartReducer';

const Cart = () => {

    const products = useSelector(state=> state.cart.products);
    const total = useSelector(state=> state.cart.total);

    const dispatch = useDispatch();

    const handleResetCart = () => {
        dispatch(resetCart());
    }

    return (
    <div className='cart'>

        <h1>Products in your cart</h1>

        {products?.map((item)=>(
            <div className="item" key={item.id}>
                <img src={import.meta.env.VITE_APP_API_UPLOAD+item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.description?.substring(0, 100)}</p>
                    <div className="price">{item.quantity} x ${item.price}</div>
                </div>
                <DeleteOutlineIcon className='delete' onClick={()=>{ dispatch(removeItem(item.id)) }}/>
            </div>
        ))}

        <div className="total">
            <span>SubTotal</span>
            <span>$ {total.toFixed(2)}</span>
        </div>

        <button>PROCEED TO CHECKOUT</button>

        <span className='reset' onClick={handleResetCart}>Reset Cart</span>

    </div>
  )
}

export default Cart
