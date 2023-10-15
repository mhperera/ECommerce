import React from 'react'
import "./FeaturedProducts.scss";
import Card from '../Card/Card';

const fearturedProducts = [
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
];

const FeaturedProducts = ({type}) => {
  return (
    <div className='featured-products'>

      <div className="top">
        <h1>{type} Products</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptas impedit aliquam ut, quis alias distinctio exercitationem facilis animi, autem laudantium praesentium reiciendis. Officia corrupti, hic debitis sapiente dolor adipisci! Aspernatur vero similique architecto magni, nihil quae quidem repellat exercitationem animi explicabo quasi ab, nostrum eaque iusto doloribus. Libero porro iste maiores quisquam at. Nostrum, illo nesciunt ipsum enim error?</p>
      </div>

      <div className="bottom">
            {
                fearturedProducts.map((product)=>(
                    <Card key={product.id} product={product}/>
                ))
            }
      </div>

    </div>
  )
}

export default FeaturedProducts
