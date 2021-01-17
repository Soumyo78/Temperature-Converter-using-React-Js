import './App.css';
import ConverterCard from './Components/Temperature Card/script';
import arrowIcon from './Resources/double-arrow.png';

function App() {
  return (
    <div className="main-container">
      <h1 id="title-text">Temperature Converter</h1>
      <div className="content-container">
        <ConverterCard titleId="title-celsius" titleText="Celsius" inputBoxId="celsius-input"/>
        <div className="arrow-img-container">
          <img src={arrowIcon} alt="" width="150px"/>
        </div>
        <ConverterCard titleId="title-fahrenheit" titleText="Fahrenheit" inputBoxId="fahrenheit-input"/>
      </div>
    </div>
  );
}

export default App;
