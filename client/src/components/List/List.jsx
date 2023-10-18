import React from 'react';
import Card from "./../Card/Card";
import "./List.scss";
import useFetch from '../../hooks/useFetch';

const List = ({ categoryId, maxPrice, sort, selectedSubCategories }) => {

  const {data, loading, error} =  useFetch(`/products?populate=*&[filters][categories][id]=${categoryId}
                                    ${selectedSubCategories.map((subCat)=>`&[filters][sub_categories][id][$eq]=${subCat}`)}
                                    &[filters][price][$lte]=${maxPrice}  
                                    &sort=price:${sort}
                                  `);

  return (
    <div className='list'>
      {
        error 
        ? "Somrthing went wrong..." 
        : (
            loading 
            ? "Loading..."
            : data?.map((product)=>(
                // <h1>{product.id}</h1>
                <Card key={product.id} product={product} />
            ))
          )
      }
    </div>
  )
}

export default List
