import React from 'react'
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>

      <div className="top">

        <div className="item">
          <h1>Categories</h1>
          <span>Ladies</span>
          <span>Gents</span>
          <span>Kids</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrival</span>
        </div>

        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>

        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum perferendis mollitia eveniet natus error. Debitis distinctio ut beatae, quis, cumque quae earum praesentium ipsa exercitationem atque nisi! Ut, illum incidunt? Adipisci, cum vitae deleniti, quisquam, autem minima quibusdam praesentium sapiente quia corporis enim asperiores perspiciatis numquam? Iure dolores magni voluptatibus!</span>
        </div>

        <div className="item">
          <h1>Contact</h1>
          <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum perferendis mollitia eveniet natus error. Debitis distinctio ut beatae, quis, cumque quae earum praesentium ipsa exercitationem atque nisi! Ut, illum incidunt? Adipisci, cum vitae deleniti, quisquam, autem minima quibusdam praesentium sapiente quia corporis enim asperiores perspiciatis numquam? Iure dolores magni voluptatibus!</span>
        </div>

      </div>

      <div className="bottom">

        <div className="left">
          <span className="logo">MANA STORE</span>
          <span className="copyright"> &copy; 2023 All Rights Reserved</span>
        </div>

        <div className="right">
          <img src="./img/payment.png" alt="" />
        </div>

      </div>

    </footer>
  )
}

export default Footer
