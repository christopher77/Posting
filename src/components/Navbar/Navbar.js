import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  const [displayOptions,setDisplayOptions] =useState(false)
  console.log("displayoptions=>",displayOptions)
	return (
		<div className="navbar__container">
			<div className="navbar__container--logo">
				<Link to="/">Logo</Link>
			</div>
			<div className="navbar__container--public">
				<Link to="/create-post">Publicar Post</Link>
			</div>
			<div className="navbar__container--menu" onClick={() => setDisplayOptions(!displayOptions)}	>
				Menu
        {displayOptions &&<DropdownMenu/>}
			</div>
		</div>
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
