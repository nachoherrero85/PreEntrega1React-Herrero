import React from 'react'
import styled from 'styled-components'
import carrito from '../assets/carrito.png'

function CartWidget() {
    return (
        <Carrito>
            {<div className='carrito1'>
                <a href=''><h3>4</h3><img src={carrito}></img></a>

            </div>


            }
        </Carrito>
    )
}

export default CartWidget

const Carrito = styled.div`

.carrito1{
    img{
        padding-top: 20px;
        width: 50px;
        height: 50px;
    }
    h3{
        position: absolute;
        color: red;
        font-size: 25px;
        font-family: sans-serif;
    }
}

    
    


`