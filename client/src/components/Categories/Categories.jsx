import React from 'react'
import "./Categories.scss";
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className='categories'>
        
        <div className="col">
            <div className="row">
                <img src="https://images.pexels.com/photos/11288119/pexels-photo-11288119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <button>
                    <Link to="/products/1" className='link'>Sale</Link>
                </button>
            </div>
            <div className="row">
                <img src="https://images.pexels.com/photos/2343654/pexels-photo-2343654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <button>
                    <Link to="/products/1" className='link'>Ladies</Link>
                </button>
            </div>
        </div>

        <div className="col">
            <div className="row">
                <img src="https://images.pexels.com/photos/9286281/pexels-photo-9286281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <button>
                    <Link to="/products/1" className='link'>New Season</Link>
                </button>
            </div>
        </div>

        <div className="col col-lg">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <img src="https://images.pexels.com/photos/14877639/pexels-photo-14877639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <button>
                            <Link to="/products/1" className='link'>Gents</Link>
                        </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <img src="https://images.pexels.com/photos/6764033/pexels-photo-6764033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <button>
                            <Link to="/products/1" className='link'>Accessories</Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <img src="https://images.pexels.com/photos/6256315/pexels-photo-6256315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <button>
                    <Link to="/products/1" className='link'>Shoes</Link>
                </button>
            </div>
        </div>

    </div>
  )
}

export default Categories
