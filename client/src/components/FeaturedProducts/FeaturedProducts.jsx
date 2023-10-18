import React from 'react';
import "./FeaturedProducts.scss";
import Card from '../Card/Card';
import useFetch from '../../hooks/useFetch';

const FeaturedProducts = ({type}) => {

  const {data, loading, error} = useFetch(`/products?populate=*&[filters][typee]=${type}`)

  return (
    <div className='featured-products'>

      <div className="top">
        <h1>{type} Products</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptas impedit aliquam ut, quis alias distinctio exercitationem facilis animi, autem laudantium praesentium reiciendis. Officia corrupti, hic debitis sapiente dolor adipisci! Aspernatur vero similique architecto magni, nihil quae quidem repellat exercitationem animi explicabo quasi ab, nostrum eaque iusto doloribus. Libero porro iste maiores quisquam at. Nostrum, illo nesciunt ipsum enim error?</p>
      </div>

      <div className="bottom">
            {   error ? "Something went wrong..." : (loading ? "Loading..." :
                data.map((product)=>(
                    <Card key={product.id} product={product}/>
                )))
            }
      </div>

    </div>
  )
}

export default FeaturedProducts
