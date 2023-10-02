
import styled from 'styled-components';
import Bar from './bar';
import React, { useEffect, useState } from "react";


export default function MainCont(props){

    const [dayIncome, setDayIncome] = useState({
        mon: 0,
        tue: 0,
        wed: 0,
        thu: 0,
        fri: 0, 
        sat: 0,
        sun: 0
    })

    const [showData, setShowData] = useState({
        mon: true,
    })
    const [totalIncome, setTotalIncome] = useState(0)

    useEffect(() => {
        setTotalIncome(dayIncome.mon + dayIncome.tue + dayIncome.wed + dayIncome.thu + dayIncome.fri + dayIncome.sat + dayIncome.sun)
        console.log(totalIncome)
    }, [dayIncome])

    function updateDayIncome(day, number){
        setDayIncome((prevState) => { return{
            ...prevState, 
            [day]: Number(number)
        }
        })
    }

    function updateDataShow(day){
        setShowData({
                [day]: showData[day] ? false : true
            }
    )
    }

    return(
        <Container>
            <h1>Spending - Last 7 Days</h1>
            <BarContainer>
                <Bar height={(100/totalIncome) * dayIncome.mon} day="mon" handleChange={updateDayIncome} totalIncome={totalIncome} showData={showData.mon} handleClick={updateDataShow} />
                <Bar height={(100/totalIncome) * dayIncome.tue} day="tue" handleChange={updateDayIncome} totalIncome={totalIncome} showData={showData.tue} handleClick={updateDataShow} />
                <Bar height={(100/totalIncome) * dayIncome.wed} day="wed" handleChange={updateDayIncome} totalIncome={totalIncome} showData={showData.wed} handleClick={updateDataShow} />
                <Bar height={(100/totalIncome) * dayIncome.thu} day="thu" handleChange={updateDayIncome} totalIncome={totalIncome} showData={showData.thu} handleClick={updateDataShow} />
                <Bar height={(100/totalIncome) * dayIncome.fri} day="fri" handleChange={updateDayIncome} totalIncome={totalIncome} showData={showData.fri} handleClick={updateDataShow}/>
                <Bar height={(100/totalIncome) * dayIncome.sat} day="sat" handleChange={updateDayIncome} totalIncome={totalIncome} showData={showData.sat} handleClick={updateDataShow}/>
                <Bar height={(100/totalIncome) * dayIncome.sun} day="sun" handleChange={updateDayIncome} totalIncome={totalIncome} showData={showData.sun} handleClick={updateDataShow}/>
            </BarContainer>
            <h1>Total Spending this week: £{totalIncome}</h1>
            <h1>Budget remaining: {props.balance - totalIncome}</h1>
        </Container>
    )
}

const Container = styled.div`
  background-color: hsl(84, 50%, 92%);
  margin-top: 5%;
  width: 100%;
  height: 80%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  h1{
    text-align: center;
    display: block;
    width: 100%;
    font-size: 15px;
    font-family: 'Open Sans', sans-serif;
  }
`;

const BarContainer = styled.div`
    display: block;
    height: 60%;
    width: 90%;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: space-between;
`;

