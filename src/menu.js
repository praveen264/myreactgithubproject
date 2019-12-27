import React,{Component} from 'react';
import './menu.css';
import 'tachyons';
const Menu = () => {
   return <div className="pa4">
       <h1>Welcome to React Routing</h1>
       <div className="routing">
   <ul className="pa4">
       <li><a href="/">Home</a></li>
       <li><a href="/about">About Us</a></li>
       <li><a href="/contact">Contact Us</a></li>
   </ul>
   </div>
   </div> 
}

export default Menu;