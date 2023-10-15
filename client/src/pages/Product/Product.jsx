import React, {useState} from 'react'
import "./Product.scss";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

const data = [
  "https://images.pexels.com/photos/8811244/pexels-photo-8811244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2363825/pexels-photo-2363825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];

const Product = () => {

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className='product'>

      <div className="left">
        <div className="images">
          <img src={data[0]} alt="" onClick={()=>setSelectedImage(0)}/>
          <img src={data[1]} alt="" onClick={()=>setSelectedImage(1)}/>
        </div>
        <div className="image-preview">
          <img src={data[selectedImage]} alt="" />
        </div>
      </div>

      <div className="right">

        <h1>TItle</h1>

        <span className='price'>$199</span>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe quae fugiat omnis accusamus, perferendis labore placeat mollitia numquam harum aliquid nostrum quis. Eum nesciunt quidem et voluptatum dignissimos placeat distinctio corrupti tempore optio atque itaque veniam quod, porro aspernatur excepturi voluptatem expedita, tenetur labore. Eligendi modi vero similique tempora sunt!</p>

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

    </div>
  )
}

export default Product
