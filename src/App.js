import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import logo from "./images/logo_marco_islas.png"
import { useState } from 'react';

function App() {

  const [clicksNumber, setClicksNumber] = useState(0);

  const useClick = () => {
    setClicksNumber(clicksNumber + 1);
  };

  const restartCounter = () => {
    setClicksNumber(0);
  };

  return (
    <div className="App">
      <div className="logo-container">
        <img className="logo" src={logo} alt="pages_logo" />
      </div>
      <div className="counter-container">

        <Counter
          clicksNumber={clicksNumber}
        />

        <Button
          texto="Click"
          isClickButton={true}
          useClick={useClick}
        />

        <Button
          texto="Restart"
          isClickButton={false}
          useClick={restartCounter}
        />

      </div>
    </div>
  );
}

export default App;
