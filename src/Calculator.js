import React, { useState } from 'react'
import './Calculator.css';
export default function Calculator() {
  const [result,setResult]=useState("");

  const clickHandle=(e)=>{
      setResult(result.concat(e.target.name));
  }
  const clear=()=>{
    setResult("");
  }
  const backspace=()=>{
    setResult(result.slice(0,-1));
  }
  const calculate=()=>{
    try{
      console.log(eval);
      setResult(eval(result).toString());
    }
    catch(err){
      setResult("Error");
    }
   
  }
  return <>
      <div className='container'>
        <form>
          <input type="text" value={result}/>
        </form>
        <div className='keypad'>
          <button onClick={clear} id='clear' >Clear</button>
          <button style={{backgroundColor:'aquamarine'}} onClick={backspace} id='backspace'>C</button>
          <button style={{backgroundColor:'aquamarine'}} onClick={clickHandle} name='/'>&divide;</button>
          <button onClick={clickHandle} name='9'>9</button>
          <button onClick={clickHandle} name='8'>8</button>
          <button onClick={clickHandle} name='7'>7</button>
          <button style={{backgroundColor:'aquamarine'}} onClick={clickHandle} name='*'>&times;</button>
          <button onClick={clickHandle} name='6'>6</button>
          <button onClick={clickHandle} name='5'>5</button>
          <button onClick={clickHandle} name='4'>4</button>
          <button style={{backgroundColor:'aquamarine'}} onClick={clickHandle} name='-'>&ndash;</button>
          <button onClick={clickHandle} name='3'>3</button>
          <button onClick={clickHandle} name='2'>2</button>
          <button onClick={clickHandle} name='1'>1</button>
          <button style={{backgroundColor:'aquamarine'}} onClick={clickHandle} name='+'>+</button>
          <button onClick={clickHandle} name='0'>0</button>
          <button onClick={clickHandle} name='.'>.</button>
          <button onClick={calculate}  id='equal'>=</button>
        

        </div>
      </div>
  
  </>
}
