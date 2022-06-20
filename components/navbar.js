import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
function Navbar() {
    return (
        <div className="header">
            <div className='navbar-nav'>
                <ul className='navbar'>
                    <li className='nav-item'>
                        <a className='nav-link' href={"#"}>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href={"#about"}>About</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href={"#features"}>Gallery</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href={"#contact"}>Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar