import React from "react";
import styled from 'styled-components'

const ItemListContainer = (props) => {
    return (

        <Salu>

            <h2>
                Hola <a href=""><span>{props.greeting}</span></a>, bienvenido.
            </h2>

        </Salu>

    );

}

export default ItemListContainer;

const Salu = styled.div`
h2{
    font-size: 25px;
    margin-left: 10px;
    
    span{
        color: purple;
        
    }

    a{
        text-decoration: none;
        
    }
}
`
