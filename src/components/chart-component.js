import styled from 'styled-components';
import Header from './header';
import MainCont from './main';
import React, { useEffect, useState } from "react";


export default function ChartComponent(props){

    const [balance, setBalance] = useState(0)

    function updateBalance(num){
        setBalance(num)
    }

    return(
        <BackgroundCont>
            <MainContainer>
                <Header balance={balance} handleChange={updateBalance}/>
                <MainCont balance={balance} />
            </MainContainer>
        </BackgroundCont>
    )
}


const BackgroundCont = styled.div`
  background-color: hsl(147, 64%, 61%);
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainContainer = styled.div`
 width: 90%;
 height: 90%;
 max-width: 600px;

`;

