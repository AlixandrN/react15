import React from 'react';
import { useEffect, useState, useRef } from "react";
import './index.css';
import Button1 from './components/UI/Button1'
import Input1 from './components/UI/Input1';

function App() {
const [disable, setDisable] = useState(false);

const inputReference = useRef();

// useEffect(() => {
//   inputReference.current.focus();
// }, []);

const focus = (e) => {
  e.preventDefault();
  inputReference.current.focus();
}

const isBtnDisabled = (disStat) => setDisable(disStat)

  return (
    <div className="App">

      <form className='form'>  
      <Input1 func={isBtnDisabled} ref={inputReference} />  
      <Button1 status={disable} > Push </Button1>
      <Button1 onClick={focus} > focus </Button1>
      </form>

    </div>
  );
}

export default App;