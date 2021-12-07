import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import './Navbar.css';
function Navbar() {
    const[menuState,setMenuState]=useState(false);
    const menuHandeler=()=>setMenuState(!menuState);
    const closeMobileMenu=()=>setMenuState(false);
    const[ButtonState,setButtonState]=useState(true);
    useEffect(()=>{
        handelButton();
    },[])
    const handelButton=()=>{
            if(window.innerWidth<=960){
                setButtonState(false);
            }
            else{
                setButtonState(true);
            }
    }
    window.addEventListener('resize',handelButton);
    return (
      <nav  className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo"> 
            Travel<i className="fab fa-typo3"></i>
            </Link>
            <div className="menu-icon" onClick={menuHandeler}>
            <i className={menuState?'fas fa-times':'fas fa-bars'}></i>
            </div>
            <ul className={menuState?'nav-menu active':'nav-menu'}>
                <li className="nav-item">
                 <Link to="/" className="nav-links" onClick={closeMobileMenu} >
                     صفحه اصلی 
                 </Link>
                </li>
                <li className="nav-item">
                 <Link to="/tourism" className="nav-links" onClick={closeMobileMenu} >
                     گردشگری
                 </Link>
                </li>
                <li className="nav-item">
                 <Link to="/tour" className="nav-links" onClick={closeMobileMenu} >
                     تور 
                 </Link>
                </li>
                <li>
                    <Link to="/" className="nav-links-mobile" onClick={closeMobileMenu}>
                        ثبت نام
                    </Link>
                </li>
            </ul>
            {

               ButtonState?<Button buttonStyle="btn--outline" to="/">
                    ثبت نام
                </Button>:null
            }
        </div>
      </nav>
    )
}

export default Navbar;
