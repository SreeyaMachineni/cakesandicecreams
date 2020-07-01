import React from 'react'
import Title from './Title'
import './Nav.css'
import {Link} from 'react-router-dom'



function Nav(){
    return(
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <div className="p-3"><Title/></div>
            <div className="p-5">
                <ul>
                    <Link to='/home'><li>Home</li></Link>
                    <li>Menu</li>
                    <li>Blog</li>
                    <li>Sign out</li>
                </ul>
            </div>
        </div>
    )
}

export default Nav