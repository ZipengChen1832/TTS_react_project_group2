import React from 'react';
import {Link} from 'react-router-dom';
import '../stylesheet/nav.css';

const Nav = () => {
    return(
        <div>
            <ul>
                <li><Link className='navLink' to="/">Home</Link></li>
                <li><Link className='navLink' to="/post">Post Tweet</Link></li>
            </ul>
        </div>
    ) 
}

export default Nav;