import React from 'react';
import {Link} from 'react-router-dom'; 
import "./Card.scss";

const Card = ({product}) => {
  return (
    <Link className="link" to={`/product/${product.id}`}>
        <div className='card'>
            <div className="images">
                { product.isNew && <span>New Season</span> }
                <img src={product.img} alt="" className="first-image" />
                <img src={product.img2} alt="" className="second-image" />
            </div>
            <h2>{product.title}</h2>
            <div className="prices">
                <h3>${product.oldPrice}</h3>
                <h3>${product.price}</h3>
            </div>
        </div>
    </Link>
  )
}

export default Card
