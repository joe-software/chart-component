import React, { useEffect, useState } from "react";
import styled from 'styled-components';



export default function Header(props){

  const [balanceValue, setBalanceValue] = useState(0)

  function updateBalanceValue(e){
      setBalanceValue(e.target.value)
  } 

  useEffect(() => {
    props.handleChange(balanceValue)
  }, [balanceValue])

    return(
        <HeaderCont>
        <BalanceCont>
            <h1>Your Balance:</h1>
            <input type="text" onChange={updateBalanceValue} />
        </BalanceCont>
        </HeaderCont>
    )
}

const HeaderCont = styled.div`
  background-color: hsl(170, 59%, 37%);
  width: 100%;
  height: 20%;
  border-radius: 5px;
  display: flex;
`;

const BalanceCont = styled.div`
  flex-direction: column;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  h1{
    font-size: 20px;
    color: white;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
  }
  input{
    font-size: 16px;
    display: inline-block;
  }
`;