import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import './navBar.css'


export default function Navbar() {
  return (
    <div className="container">
      <div className="nav">
        <a className="nav_title">The Book Store</a>
        <ul className="nav_list">
          <li>
            <a href="https://www.google.com/"><CartWidget /></a>
          </li>
          <li>
            <a href="https://www.google.com/">Sucursales</a>
          </li>
          <li>
            <a href="https://www.google.com/">Contacto</a>
          </li>
          <li>
            <a href="https://www.google.com/">Productos</a>
          </li>
        </ul>
      </div>
    </div>
  )
}