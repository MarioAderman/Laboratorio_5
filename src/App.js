import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'

function App() {

  const [temperatureColor, setTemperatureColor] = useState('cold')
  const [temperatureValue, setTemperatureValue] = useState(10)

function Incrementa (){
  setTemperatureValue(temperatureValue+1);
  if (temperatureValue >=30){setTemperatureValue(30)}
  if (temperatureValue >=20){setTemperatureColor('hot')}
}

function Decrementa (){
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
