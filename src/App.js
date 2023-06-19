import './App.css'
import {useState} from 'react'

import {decConv,Brightness} from './Brightness.js'
import {complDic,compl} from './Compl.js'
import {randomColor} from './randomColor.js'
export default function App() {

const [hexValue,setHexValue]=useState("#ffffff")

const handleClick=()=>{
  let val=randomColor();
  setHexValue(val);
}
  return (
    <main>
      <h2>Temporary, so contrary...</h2>
      <div className="wrapper">
      <section className="square" style={{
                backgroundColor: hexValue, color: Brightness(hexValue)>130?"#000" : "#FFF"
            }}><p>{hexValue ? hexValue : null}</p>
      </section>
      <section className="square"
        style={{backgroundColor: compl(hexValue), color: Brightness(compl(hexValue))>130?"#000":"#fff"}}>
         <p>{hexValue ? compl(hexValue) : null}</p>  
      </section>
      </div>
<div className="wrapper">
<button className="btn" onClick={handleClick}>Click to generate a random color</button></div>
   </main>
  )
}

