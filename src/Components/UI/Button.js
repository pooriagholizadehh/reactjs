import React from 'react'
import './Button.css';
import { Link } from 'react-router-dom';
const Styles=['btn--tour','btn--outline','btn--special','btn--search','btn--primary','btn--search--place']; 
const Size=['btn--medium','btn--large'];
function Button(props) {
    const{to,children,buttonStyle,buttonSize}=props;
    const ButtonStyle=Styles.includes(buttonStyle)?buttonStyle:Styles[4];
    const ButtonSize=Size.includes(buttonSize)?buttonSize:Size[0];
    return (
       <Link to={to} className="btn-mobile">
           <button className={`btn ${ButtonStyle} ${buttonSize}` }>
               {children}
           </button>
       </Link>
    )
}
export default Button;
