import React from 'react';
import "./Navbar.scss"
const Navbar = () => {
    return (
        <div>
            <div className="navbar_container">
                <div className="navbar_container_main">
                    <div className="navbarlogo">
                        <ul>
                            <li>
                                <span>
                                    <i class="bx bx-envelope"></i>
                                    <span>shoesappweb@gmail.com</span>
                                </span>
                                <span>
                                    <i class="bx bx-phone"></i>
                                    <span>0835129814</span>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar_menu">
                        <ul>
                            <li><span>Home</span></li>
                        </ul>
                        <ul>
                            <li><span>Product</span></li>
                        </ul>
                        <ul>
                            <li><span>About</span></li>
                        </ul>
                        <ul>
                            <li><span>Contact</span></li>
                        </ul>
                    </div>
                    <div className="navbar_container_search">
                        <div className="navbar_container_search_item">
                            <input type="text" placeholder='Search Item' />
                        </div>
                        <div className="navbar_container_search button">
                            <button>SUBMIT</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;