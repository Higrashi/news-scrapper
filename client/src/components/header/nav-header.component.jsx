import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './nav-header.styles.css';



const NavHeader = () => {
  // header close/open state  
  const [open, setOpen] = useState(false); 
    
  const  handleToggle = () =>{
        setOpen(!open)
  }

    return (
        <>
        <header className="header">

        <div className="name">
          <span>News Scrapper</span>
        </div>
    
        <div className="logo"></div>
    
        <div className="menu" onClick={handleToggle}>
          <span className="menu-span"></span>
          <span className="menu-span"></span>
        </div>
    
        <div className={`header-overlay ${open ? 'header-show': null}`}>
          <div className="nav">
            <div className="nav-links-container">
                <button className="button-nav" onClick={handleToggle}>&#215;</button>
                <Link to='/news-page/arts' className="nav-link" onClick={handleToggle}>Arts</Link>
                <Link to="/news-page/home" className="nav-link" onClick={handleToggle}>Home</Link>
                <Link to="/news-page/science" className="nav-link" onClick={handleToggle}>Science</Link>
                <Link to="/news-page/us" className="nav-link" onClick={handleToggle}>Us</Link>
                <Link to="/news-page/world" className="nav-link" onClick={handleToggle}>World</Link>
            </div>
          </div>
    
       
        </div>
    </header>
    {/* bottom overlay to prevent clicking while header is open */}
    <div className={`click-blocker ${open ? 'click-blocker-show' : null}`}></div>
    </>
    )
}

export default NavHeader;