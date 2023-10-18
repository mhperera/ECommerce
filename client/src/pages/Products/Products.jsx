import React, { useState } from 'react'
import List from './../../components/List/List';
import { useParams } from 'react-router-dom';
import useFetch from './../../hooks/useFetch';
import "./Products.scss";

const Products = () => {

  const categoryId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState('asc');
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);

  const { data: subCategories, loading, error} = useFetch(`/sub-categories?[filters][categories][id][$eq]=${categoryId}`);

  const handleSubCategoryChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    setSelectedSubCategories(isChecked ? [...selectedSubCategories, value] : selectedSubCategories.filter((subCat)=>subCat!==value));
  }

  return (
    <div className='products'>

      <div className="left">

        <div className="filter">

          <h3>Product Categories</h3>

          {
            subCategories?.map((subCategory)=>(
                <div className="input-item" key={subCategory.id}>
                  <input 
                    type="checkbox" 
                    name="" id={subCategory.id} 
                    value={subCategory.id} 
                    onChange={handleSubCategoryChange}
                  />
                  <label htmlFor={subCategory.id} >{subCategory.attributes.title} </label>
              </div>
            ))
          }

        </div>

        <div className="filter">

          <h3>Filter by Price</h3>

          <div className="input-item">
            <span>0</span>
            <input 
              type="range" 
              min={0} 
              max={1000} 
              onChange={(e)=>setMaxPrice(e.target.value)} 
              value={maxPrice}
            />

            <span>{maxPrice}</span>

          </div>

        </div>

        <div className="filter">

          <h3>Sort by</h3>

          <div className="input-item">
            <input 
              type="radio" 
              name="price" 
              id="asc" 
              value="asc" 
              onChange={(e)=>setSort(e.target.value)}
              />
            <label htmlFor="asc">Price (Lowest First)</label>
          </div>

          <div className="input-item">
            <input 
              type="radio" 
              name="price" 
              id="desc" 
              value="desc" 
              onChange={(e)=>setSort(e.target.value)}
            />
            <label htmlFor="desc">Price (Largest First)</label>
          </div>
          
        </div>

      </div>

      <div className="right">
        <img 
          className="category-image" 
          src="https://images.pexels.com/photos/6712670/pexels-photo-6712670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="" 
        />
        <List 
          categoryId={categoryId} 
          maxPrice={maxPrice}
          sort={sort}
          selectedSubCategories={selectedSubCategories}
        />
      </div>

    </div>
  )
}

export default Products
