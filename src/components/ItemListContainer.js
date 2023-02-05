import React from "react";
import styled from 'styled-components'

const Saludo = (props) => {
    return (

        <Salu>

            <h2>
                Hola <a href=""><span>{props.usuario}</span></a>, bienvenido.
            </h2>

        </Salu>

    );

}

export default Saludo;

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
