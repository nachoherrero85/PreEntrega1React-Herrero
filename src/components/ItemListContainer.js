import React from "react";
import styled from 'styled-components'

const Saludo = (props) => {
    return (

        <Salu>

            <h2>
                Hola <span>{props.usuario}</span>, bienvenido.
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
}
`
