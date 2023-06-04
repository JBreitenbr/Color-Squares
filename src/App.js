import './App.css'
import {useState} from 'react'

import {decConv,Brightness} from './Brightness.js'
import {complDic,compl} from './Compl.js'
export default function App() {

const [hexValue,setHexValue]=useState("#453456")
  const [isDarkText,setIsDarkText]=useState(false);  
const [isDarkText2,setIsDarkText2]=useState(true);
  return (
    <main>
      <h2>Temporary, so contrary...</h2>
      <div className="wrapper">
      <section className="square" style={{
                backgroundColor: hexValue, color: isDarkText ? "#000" : "#FFF"
            }}><p>{hexValue ? hexValue : null}</p></section>
      <section className="square"
        style={{backgroundColor: compl(hexValue), color: isDarkText2?"#000":"#fff"}}>
         <p>{hexValue ? compl(hexValue) : null}</p>  
      </section>
      </div>
      <form className="inputBox" onSubmit={(e) => e.preventDefault()}>
            <input
                autoFocus
                type="text" 
                placeholder="Add a color name (hex code)"
                required
                value={hexValue}
                onChange={(e) => {
//setColorValue(e.target.value);
                    setHexValue(e.target.value);
let br=Brightness(e.target.value);   
if(br<130){setIsDarkText(false);}
    else{setIsDarkText(true)};
let br2=Brightness(compl(e.target.value)); if(br2<130){setIsDarkText2(false);}
    else{setIsDarkText2(true)};      
                }}
            />
<label> Add a hex color</label>
        </form>
    </main>
  )
}

