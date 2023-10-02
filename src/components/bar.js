import React, { useEffect, useState } from "react";
import styled from 'styled-components';



export default function Bar(props){

    const [perc, setPerc] = useState(0)

    function updatePerc(e){
        setPerc(e.target.value)
    }

    useEffect(()=> {
        props.handleChange(props.day, perc)
    }, [perc])

    

    return(
        <BarCont>
        <BarColumn style={{ height: props.height + "%", marginBottom: "15px" }} />
        <InputCont>
        <input type="text" onChange={updatePerc} />
        </InputCont>
        <BarTitle>{props.day}</BarTitle>
        </BarCont>
    )
}

const BarCont = styled.div`

width: 10%;
display: flex;
flex-direction: column;
justify-content: flex-end;
position: relative;

`;

const BarColumn = styled.div`
background-color: rgb(5, 56, 107);
margin: 0 5%; 
border-radius: 5px;
`;

const InputCont = styled.div`
input{
    width: 90%;
    font-size:16px;
}

`;

const BarTitle = styled.h1`
 display: block;
 font-size: 10px;
`;
