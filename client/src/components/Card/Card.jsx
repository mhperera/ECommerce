import React from 'react';
import {Link} from 'react-router-dom'; 
import "./Card.scss";

const Card = ({product}) => {
  return (
    <Link className="link" to={`/product/${product.id}`}>
        <div className='card'>
            <div className="images">
                { product.attributes?.isNew && <span>New Season</span> }
                <img src={import.meta.env.VITE_APP_API_UPLOAD+product.attributes?.img.data.attributes?.url} alt="" className="first-image" />
                <img src={import.meta.env.VITE_APP_API_UPLOAD+product.attributes?.img2.data.attributes?.url} alt="" className="second-image" />
            </div>
            <h2>{product.attributes?.title}</h2>
            <div className="prices">
                <h3>${product.attributes?.oldPrice || product.attributes?.price + 20}</h3>
                <h3>${product.attributes?.price}</h3>
            </div>
        </div>
    </Link>
  )
}

export default Card
