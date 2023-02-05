import React, { useState } from 'react'
import styled from 'styled-components'
import BurgerButton from './BurgerButton'
import logoempresa from '../assets/logoempresa.png'
import CartWidget from './CartWidget'


function NavBar() {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }

    return (
        <>

            <NavContainer>

                <div><img src={logoempresa}></img></div>
                <h2>Airplane <span>Hoby</span></h2>

                <div className={`links ${clicked ? "active" : ""}`}>
                    < a href='/'>HOME</a>
                    <a href='/'>COMPRAR</a>
                    <a href='/'>PROXIMAMENTE</a>
                    <a href='/'>CONTACTO</a>

                </div>
                <CartWidget />
                <div className='burger'>
                    <BurgerButton clicked={clicked} handleClick={handleClick} />
                </div>
                <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>

            </NavContainer>
        </>
    )
}

export default NavBar;

const NavContainer = styled.nav`
h2 {
    font-size: 50px;
    font-weight: 400;
    color: white;
    align-items: center;

    span{
        font-weight: bold;
        text-decoration: underline;
    }
  }
  padding-right: .4rem;
  background-color:purple ;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
    

  }

  img{
    width: 100px;
    height: 100px;
    align-items: center;
    color: white;
    
  }

  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    a{
        color: white;
        font-size: 2rem;
        display: block;
    }
    @media(min-width:768px) {
        position: initial;
        margin: 0;
        a{
            font-size: 1.25rem;
            color: white;
            display: inline;  
        }
        a:hover{
            color: grey;
            text-decoration: overline;
        }
    }
  }

.links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
        color: white;
    }
}
.burger{
    @media(min-width: 768px){
        display: none;
    }
}
`


const BgDiv = styled.div`
      background-color: #222;
      position: absolute;
      top: -1000px;
      left: -1000px;
      width: 100%;
      height: 100%;
      z-index: -1;
      transition: all .6s ease ;

    &.active{
        border-radius: 0 0 80 % 0;
top: 0;
left: 0;
width: 100%;
height: 100%;
  }
`