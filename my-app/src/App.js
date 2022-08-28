import React from 'react';
import { useEffect, useState, useRef } from "react";
import './index.css';
import Button1 from './components/UI/Button1'
import Input1 from './components/UI/Input1';

function App() {
const [disable, setDisable] = useState(false);
// const [customVal, setCustomVal] = useState(0);

const inputReference = useRef();


useEffect(() => {inputReference.current.focus();}, []);
useEffect(() => {
  console.log('the button status has been changed')
  return () => {console.log('test after')}
}, [disable]);



const focus = (e) => {
  e.preventDefault();
  inputReference.current.focus();
  // inputReference.current.value = 55
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