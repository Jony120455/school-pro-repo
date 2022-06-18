import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navber.css'

const Navber = () => {
    return (
        <nav className='navber'>
           <div className='navber-style'>
           
           <NavLink className="pad" activeStyle={{
                fontWeight: "bold",
                color: "red"}} to="/home">HOME</NavLink> 
           
           
           <NavLink className="pad" activeStyle={{
                fontWeight: "bold",
                color: "red"}} to="/menu">MENU</NavLink> 
           
           
           <NavLink className="pad" activeStyle={{
                fontWeight: "bold",
                color: "red"}} to="/about">ABOUT</NavLink>
            
           <NavLink className="pad" activeStyle={{
                fontWeight: "bold",
                color: "red"}} to="/contact">CONTACT</NavLink> 
           </div>
          
        </nav>
    );
};

export default Navber;