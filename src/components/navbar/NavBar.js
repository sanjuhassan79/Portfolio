import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const NavBar = () => {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <div>
            <div className="area">
            <div onClick={showSidebar} className="dis_none">
            <i className="fas fa-bars"></i>
            </div>
                <img src="https://i.ibb.co/jk6C2vj/sanju.png" alt="sanju" className="img-fluid imgItem"/>
            
           
            </div>
            <nav className= {sidebar ? 'main-menu active' : 'main-menu'}>
            <ul>
            <div onClick={showSidebar} className="cloes dis_none">
            <i className="fas fa-times"></i>
            </div>
                <li>
                    <Link to="/">
                        <i className="fas fa-home fa-2x"><br />
                        <span>Home</span>
                        </i>
                        
                    </Link>
                  
                </li>
                <li className="has-subnav">
                    <Link to="/about">
                        <i className="fas fa-user fa-2x"><br />
                        <span>About</span>
                        </i>
                       
                    </Link>
                    
                </li>
                <li className="has-subnav">
                    <Link to="/work">
                       <i className="fas fa-briefcase fa-2x">
                       <br />
                       <span>work</span>
                       </i>
                    </Link>
                    
                </li>
                <li className="has-subnav">
                    <Link to="/contact">
                       <i className="fas fa-id-card fa-2x">
                       <br />
                       <span>Contact</span>
                       </i>
                     
                    </Link>
                   
                </li>
               
               
            </ul>

            {/* <ul className="logout">
                <li>
                   <Link to="#">
                         <i className="fa fa-power-off fa-2x"></i>
                        <span className="nav-text">
                            Logout
                        </span>
                    </Link>
                </li>  
            </ul> */}
        </nav>
        </div>
    );
};

export default NavBar;