import React from 'react';
import Card from "./../Card/Card";
import "./List.scss";

const data = [
    {
        id: 1,
        img: 'https://images.pexels.com/photos/6334400/pexels-photo-6334400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        img2: 'https://images.pexels.com/photos/16649248/pexels-photo-16649248/free-photo-of-model-in-tshirt-with-print.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Long Sleeve Graphic T-Shirt',
        isNew: true,
        oldPrice: 19,
        price: 12,
    },
    {
        id: 2,
        img: 'https://images.pexels.com/photos/16048125/pexels-photo-16048125/free-photo-of-young-woman-in-casual-clothes-posing-in-studio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        img2: 'https://images.pexels.com/photos/16048170/pexels-photo-16048170/free-photo-of-young-woman-in-casual-clothes-posing-in-studio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Short Sleeve Large T-Shirt',
        isNew: true,
        oldPrice: 19,
        price: 12,
    },
    {
        id: 3,
        img: 'https://images.pexels.com/photos/14455769/pexels-photo-14455769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        img2: 'https://images.pexels.com/photos/12846225/pexels-photo-12846225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Printed Tops',
        isNew: true,
        oldPrice: 19,
        price: 12,
    },
    {
        id: 4,
        img: 'https://images.pexels.com/photos/8811244/pexels-photo-8811244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        img2: 'https://images.pexels.com/photos/2363825/pexels-photo-2363825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Heigh Waist Denim',
        isNew: true,
        oldPrice: 19,
        price: 12,
    },
    {
      id: 5,
      img: 'https://images.pexels.com/photos/8811244/pexels-photo-8811244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      img2: 'https://images.pexels.com/photos/2363825/pexels-photo-2363825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Heigh Waist Denim',
      isNew: true,
      oldPrice: 19,
      price: 12,
  },
  {
    id: 6,
    img: 'https://images.pexels.com/photos/8811244/pexels-photo-8811244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    img2: 'https://images.pexels.com/photos/2363825/pexels-photo-2363825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Heigh Waist Denim',
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 7,
    img: 'https://images.pexels.com/photos/8811244/pexels-photo-8811244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    img2: 'https://images.pexels.com/photos/2363825/pexels-photo-2363825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Heigh Waist Denim',
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 8,
    img: 'https://images.pexels.com/photos/8811244/pexels-photo-8811244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    img2: 'https://images.pexels.com/photos/2363825/pexels-photo-2363825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Heigh Waist Denim',
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 9,
    img: 'https://images.pexels.com/photos/8811244/pexels-photo-8811244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    img2: 'https://images.pexels.com/photos/2363825/pexels-photo-2363825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Heigh Waist Denim',
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
];


const List = () => {
  return (
    <div className='list'>
      {
        data?.map((product)=>(
            <Card key={product.id} product={product} />
        ))
      }
    </div>
  )
}

export default List
