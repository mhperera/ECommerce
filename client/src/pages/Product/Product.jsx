import React, {useState} from 'react'
import "./Product.scss";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import useFetch from './../../hooks/useFetch';
import { useParams } from 'react-router-dom';

const Product = () => {

  const id = useParams().id;

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  const [selectedImage, setSelectedImage] = useState('img');
  const [quantity, setQuantity] = useState(1);

  // console.log(data?.attributes[selectedImage]?.data); // NOT WORKING

  return (
    <div className='product'>

      {
        error 
        ? 'Something went wrong' 
        : (
            loading  
            ? 'Loading...' 
            : (
                <>
                  <div className="left">
                    <div className="images">
                      <img 
                        src={import.meta.env.VITE_APP_API_UPLOAD+data?.attributes?.img?.data?.attributes?.url} 
                        alt="" 
                        onClick={()=>setSelectedImage(0)}
                      />
                      <img 
                        src={import.meta.env.VITE_APP_API_UPLOAD+data?.attributes?.img2?.data?.attributes?.url} 
                        alt="" 
                        onClick={()=>setSelectedImage(1)}
                      />
                    </div>
                    <div className="image-preview">
                      <img 
                        src={
                                  selectedImage===0 
                                  ? (import.meta.env.VITE_APP_API_UPLOAD+data?.attributes?.img?.data?.attributes?.url) 
                                  : (import.meta.env.VITE_APP_API_UPLOAD+data?.attributes?.img2?.data?.attributes?.url) 
                        } 
                        alt="" 
                      />
                    </div>
                  </div>
            
                  <div className="right">
            
                    <h1>{data?.attributes?.title}</h1>
            
                    <span className='price'>${data?.attributes?.price}</span>
            
                    <p>{data?.attributes?.description}</p>
            
                    <div className="quantity">
                      <button onClick={()=> quantity!==1 && setQuantity(prevState => prevState-1)}>-</button>
                      {quantity}
                      <button onClick={()=>setQuantity(prevState=> prevState+1)}>+</button>
                    </div>
            
                    <div className="add">
                      <AddShoppingCartIcon /> ADD TO CART
                    </div>
            
                    <div className="links">
            
                      <div className="item">
                        <FavoriteBorderIcon /> ADD TO WISH LIST
                      </div>
                      
                      <div className="item">
                        <BalanceIcon/> ADD TO COMPARE
                      </div>
            
                    </div>
            
                    <div className="info">
                      <span>Vendor: Polo</span>
                      <span>Product-Type: T-shirt</span>
                      <span>Tag: T-shirt, Ladies, Top</span>
                    </div>
            
                    <hr />
            
                    <div className="details">
                      <span>DESCRIPTION</span>
                      <hr />
                      <span>ADDITIONAL INFORMATION</span>
                      <hr />
                      <span>FAQ</span>
                    </div>
            
                  </div>
                </>
              )
          )
      }

    </div>
  )
}

export default Product
