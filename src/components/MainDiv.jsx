import { useState } from "react";



export function MainDiv() {

const [tempTotal, setTempTotal] = useState(0);
const [tempColor, setTempColor] = useState('zero');

const increaseTemperature = () => {
    const newTemp = tempTotal + 1;
    setTempTotal(newTemp);
    if (newTemp > 0 && newTemp < 10) {
        setTempColor('five')
    } else if (newTemp >=10 && newTemp < 15) {
        setTempColor('ten')
    } else if (newTemp >= 15 && newTemp < 20) {
        setTempColor('fifteen')
    } else if (newTemp >= 20 && newTemp < 25 ) {
        setTempColor('twenty')
    } else if (newTemp >=25 && newTemp < 30) {
        setTempColor('twentyFive')
    } else if (newTemp >= 30 && newTemp < 35) {
        setTempColor('thirty')
    } else if (newTemp >= 35) {
        setTempColor('thirtyFive')
    } else if (newTemp <= -1 && newTemp > -5) {
        setTempColor('minusFive')
    } else if (newTemp <= -5 && newTemp > -10) {
        setTempColor('minusTen')
    } else if (newTemp <= -10 && newTemp > -15 ) {
        setTempColor('minusFifteen')
    } else if (newTemp <= -15 && newTemp > -20) {
        setTempColor('minusTwenty')
    } else if (newTemp <= -20 && newTemp > -25) {
        setTempColor('minusTwentyFive')
    } else if (newTemp <= -25 && newTemp > -30) {
        setTempColor('minusThirty')
    } else if (newTemp <= -30) {
        setTempColor('minusThirtyFive')
    }
};
const decreaseTemperature = () => {
    const newTemp = tempTotal - 1;
    setTempTotal(newTemp);
    if (newTemp > 0 && newTemp < 10) {
        setTempColor('five')
    } else if (newTemp >=10 && newTemp < 15) {
        setTempColor('ten')
    } else if (newTemp >= 15 && newTemp < 20) {
        setTempColor('fifteen')
    } else if (newTemp >= 20 && newTemp < 25 ) {
        setTempColor('twenty')
    } else if (newTemp >=25 && newTemp < 30) {
        setTempColor('twentyFive')
    } else if (newTemp >= 30 && newTemp < 35) {
        setTempColor('thirty')
    } else if (newTemp >= 35) {
        setTempColor('thirtyFive')
    } else if (newTemp <= -1 && newTemp > -5) {
        setTempColor('minusFive')
    } else if (newTemp <= -5 && newTemp > -10) {
        setTempColor('minusTen')
    } else if (newTemp <= -10 && newTemp > -15 ) {
        setTempColor('minusFifteen')
    } else if (newTemp <= -15 && newTemp > -20) {
        setTempColor('minusTwenty')
    } else if (newTemp <= -20 && newTemp > -25) {
        setTempColor('minusTwentyFive')
    } else if (newTemp <= -25 && newTemp > -30) {
        setTempColor('minusThirty')
    } else if (newTemp <= -30) {
        setTempColor('minusThirtyFive')
    }

};

 

    return (
        <div className="container">
            <div className={`thermo ${tempColor}`}>
                <h2>{tempTotal} °C</h2>
            </div>

            <div className="buttonsDiv">
                <button onClick={increaseTemperature} style={{backgroundColor:'red'}}>+</button>
                <button onClick={decreaseTemperature} style={{backgroundColor:'blue'}}>-</button>
            </div>
        </div>
    );
}