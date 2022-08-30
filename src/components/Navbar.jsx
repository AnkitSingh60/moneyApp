import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from "react-redux"

const Navbar = () => {
    const item = useSelector((state)=>state.cart)
    // console.log('item:', item)
    return (
        <nav className="navbar">
            <h4 className="navbar-brand"> <Link className='h4Black' to="/">STORE</Link></h4>
           <h4><Link className='h4Black' to="/cart">Cart({item.length})</Link> </h4> 
        </nav>
    )
}

export default Navbar