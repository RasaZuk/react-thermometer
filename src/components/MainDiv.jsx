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