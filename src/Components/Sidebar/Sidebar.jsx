import React from "react";
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

function Sidebar() {

    const HoverText = styled.p`
	 color: var(--main-title); 
     font-size: 1.5rem;
     font-weight: 700;
     letter-spacing: .2rem;
     text-transform: uppercase;
     text-decoration: none;
     cursor: pointer;
	 :hover {
		color: #f8f3a6; 
        font-size: 2rem;
	 } 
    `

    return (
        <SidebarStyled>
            <div>
            <input type="checkbox" class="checkbox" id="checkbox" hidden></input>
            <div class="sidebar">
                <label for="checkbox">
                    <div class="sidebarmenu">
                        <div class="line line1"></div>
                        <div class="line line2"></div>
                        <div class="line line3"></div>
                    </div>
                </label>
                <ul class="socialmedia">
                    <li>
                        <a href="https://www.linkedin.com/in/monica-d-agosto-aa340813/" aria-label="LinkedIn profile" target="blank" class="socialmedialist" Title="LinkedIn"><i class="fab fa-linkedin" aria-hidden="true" ></i></a>
                    </li>
                    <li>
                        <a href="https://github.com/NicaDago" aria-label="GitHub profile" target="blank" class="socialmedialist" Title="GitHub"> <i class="fab fa-github" aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a href="https://codepen.io/NicaDago" aria-label="CodePen profile" target="blank" class="socialmedialist" Title="CodePen"><i class="fab fa-codepen" aria-hidden="true"></i></a>
                    </li>
                </ul>
            </div>

            <nav class="navbar">
                <ul class="navbarlist">
                    <li className="navbarpos">
                        <NavLink to="/"  class="navbarlink" exact><HoverText>HOME</HoverText></NavLink>
                    </li>
                    <li className="navbarpos">
                        <NavLink to="/portfolio" class="navbarlink" exact><HoverText>PORTFOLIO</HoverText></NavLink>
                    </li>
                    <li className="navbarpos">
                        <NavLink to="/about" class="navbarlink" exact><HoverText>ABOUT</HoverText></NavLink>
                    </li>
                    <li className="navbarpos">
                        <NavLink to="/skills" class="navbarlink" exact><HoverText>SKILLS</HoverText></NavLink>
                    </li>
                    <li className="navbarpos">
                        <NavLink to="/education" class="navbarlink" exact><HoverText>EDUCATION</HoverText></NavLink>
                    </li>
                    <li className="navbarpos">
                        <NavLink to="/contact" class="navbarlink" exact><HoverText>CONTACT</HoverText></NavLink>
                    </li>
                    <li className="navbarpos">
                        <NavLink to="/blog" class="navbarlink"><HoverText>BLOG</HoverText></NavLink>
                    </li>      
                </ul>
            </nav> 
        </div>   
        </SidebarStyled>
    )
}

const SidebarStyled = styled.div`

font-family: 'Oswald', sans-serif;

//-------------------------sidebar-------------------------------
.sidebar {
    left: 95%;
    width: 4rem;
    height: 100%;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 10;
}

.sidebarmenu {
    margin-top: 3rem;
    cursor: pointer;
}

.line {
    height: .2rem;
    width: 2.5rem;
    background-color: var(--main-title);
    margin-bottom: .6rem;
}

.line1, .line3 {
    width: 1.8rem;
    transition: all .4s;
}

.sidebarmenu:hover .line {
    width: 2.5rem;
}

.socialmedia {
    list-style: none;
    padding: 0;
    height: 25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 5rem;
    margin-bottom: auto;
}

.socialmedialist {
    font-size: 2rem;
    color: var(--main-title);
    transition: color .3s;
}

.socialmedialist:hover {
    color: #8a0404;
} 

//----------------------navbar--------------------------------
.navbar {
    position: fixed;
    left: 100%;
    width: 20rem;
    height: 55%;
    background-color: rgba(13, 110, 4, 0.178);
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 5;
    transition: left .8s cubic-bezier(1, 0, 0, 1);
    border-radius: 30px;
    cursor: pointer;
}

.navbarlist {
    list-style: none;
    padding: 0;
    height: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
}

.navbarpos {
    position: relative;
}

.checkbox:checked ~ .navbar {
    left: 70%;
}

.checkbox:checked ~ .sidebar .line1 {
    transform: rotate(-405deg) translate(-5px, 6px);
    width: 2.5rem;
}

.checkbox:checked ~ .sidebar .line2 {
    opacity: 0;
}

.checkbox:checked ~ .sidebar .line3 {
    transform: rotate(405deg) translate(-5px, -6px);
    width: 2.5rem;
} 
  

  //-----------------phone-----------------------

  @media screen and (max-width:375px){

    .sidebar {
        left: 32%;
    }

    .socialmedia {
   display: none;
}

.navbar {
    left: 0;
    width: 20rem;
    height: 30rem;
    transition: left .8s cubic-bezier(1, 0, 0, 1);
}


  }

  //-----------------tablet--------------------
  @media screen and (max-width:810px){

.sidebar {
    left: 32%;
}

.socialmedia {
display: none;
}

.navbar {
    left: 50%;
    width: 50rem;
    height: 30rem;
    transition: left .8s cubic-bezier(1, 0, 0, 1);
}


}
`;
export default Sidebar;
