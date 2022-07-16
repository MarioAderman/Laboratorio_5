import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'

function App() {

  const [temperatureColor, setTemperatureColor] = useState('cold')
  const [temperatureValue, setTemperatureValue] = useState(10)

function Incrementa (){
  /*Cada que se presiona el botón+ se llama esta función que incrementa el valor
  y evalua si el valor llega a más de 30 y de 20 para cambiar el estado de las varibles*/
  setTemperatureValue(temperatureValue+1);
  if (temperatureValue >=30){setTemperatureValue(30)}
  if (temperatureValue >=20){setTemperatureColor('hot')}
}

function Decrementa (){
  /*Cada que se presiona el botón+ se llama esta función que decrementa el valor
  y evalua si el valor llega a menos de 0 y de 20 para cambiar el estado de las varibles*/
  setTemperatureValue(temperatureValue-1);
  if (temperatureValue <=0){setTemperatureValue(0)}
  if (temperatureValue <=20){setTemperatureColor('cold')}
}

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}°C
        </div>
      </div>
      <div className="button-container">
        <button onClick={Incrementa}>+</button>
        <button onClick={Decrementa}>-</button>
      </div>
    </div>
  );
}

export default App;
