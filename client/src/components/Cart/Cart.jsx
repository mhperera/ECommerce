import React from 'react';
import "./Cart.scss";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const data = [
    {
        id: 1,
        img: 'https://images.pexels.com/photos/6334400/pexels-photo-6334400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        img2: 'https://images.pexels.com/photos/16649248/pexels-photo-16649248/free-photo-of-model-in-tshirt-with-print.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Long Sleeve Graphic T-Shirt',
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus rerum quae, at tempore id quaerat possimus error ipsum similique maxime optio nesciunt ad, accusamus iste odit dignissimos enim adipisci! Vero expedita, iusto ratione voluptates debitis nemo quibusdam fuga neque aspernatur magnam sequi sed eveniet obcaecati, deleniti temporibus illo aut officia.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus rerum quae, at tempore id quaerat possimus error ipsum similique maxime optio nesciunt ad, accusamus iste odit dignissimos enim adipisci! Vero expedita, iusto ratione voluptates debitis nemo quibusdam fuga neque aspernatur magnam sequi sed eveniet obcaecati, deleniti temporibus illo aut officiaLorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus rerum quae, at tempore id quaerat possimus error ipsum similique maxime optio nesciunt ad, accusamus iste odit dignissimos enim adipisci! Vero expedita, iusto ratione voluptates debitis nemo quibusdam fuga neque aspernatur magnam sequi sed eveniet obcaecati, deleniti temporibus illo aut officia",
        isNew: true,
        oldPrice: 19,
        price: 12,
    },
    {
        id: 2,
        img: 'https://images.pexels.com/photos/16048125/pexels-photo-16048125/free-photo-of-young-woman-in-casual-clothes-posing-in-studio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        img2: 'https://images.pexels.com/photos/16048170/pexels-photo-16048170/free-photo-of-young-woman-in-casual-clothes-posing-in-studio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Short Sleeve Large T-Shirt',
        description: "Lorem ipsum dolor sit",
        isNew: true,
        oldPrice: 19,
        price: 12,
    },
];

const Cart = () => {
  return (
    <div className='cart'>

        <h1>Products in your cart</h1>

        {data?.map((item)=>(
            <div className="item" key={item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.description?.substring(0, 100)}</p>
                    <div className="price">1 x {item.price}</div>
                </div>
                <DeleteOutlineIcon className='delete'/>
            </div>
        ))}

        <div className="total">
            <span>SubTotal</span>
            <span>$ 123</span>
        </div>

        <button>PROCEED TO CHECKOUT</button>

        <span className='reset'>Reset Cart</span>

    </div>
  )
}

export default Cart
