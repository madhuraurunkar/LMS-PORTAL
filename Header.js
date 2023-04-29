import React from 'react';
import {Link} from "react-router-dom";
import "./Header.css"

const Header = () => {
    
    return(
        <div className="header">
        <p className='logo'>Fee Collection</p>
        <div className="header-right">

            <Link to="/">
                <p>Home</p>
            </Link>
            
            <Link to="/add">
                <p>AddStudents</p>
            </Link>


          </div> 
        </div>
    );
};
 
export default Header;



