import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [displayOptions,setDisplayOptions] =useState(false)
  const navigate = useNavigate();

	return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">Logo
        <img src="" className="navbar__logo--iamge"/>
      </Link>
      <div className="navbar__right">
        <ul className="navbar__right--list">
          <li className="navbar__item" onClick={()=>navigate("/create-post")}>
            <Link to="/create-post" className="navbar__item--link"  >Publicar Post</Link>
          </li>
          <li className="navbar__item" onClick={() => setDisplayOptions(!displayOptions)}>
            <div className="navbar__item--simple reference">Menu</div>
            {displayOptions &&<DropdownMenu/>}
          </li>
        </ul>
      </div>
    </nav>
	);
}

function DropdownMenu(){

  function DropdownItem(props){
    return(
      <a href="#" className="menu__item">
        {props.children}
      </a>
    )
  }
  return(
    <div className="dropdown">
      <DropdownItem>Menu</DropdownItem>
      <DropdownItem>Mi Perfil</DropdownItem>
      <DropdownItem>Mensajes</DropdownItem>
      <DropdownItem>Grupos</DropdownItem>
    </div>
  )
}

export default Navbar;
