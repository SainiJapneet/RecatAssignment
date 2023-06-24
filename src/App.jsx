
import { useState } from 'react'
import './App.css'
import Output from './Output';


function App(){
const [input,finalInput] = useState("");

const myForm = (inputValue)=>{
  finalInput(inputValue);
}

  return (
    <>
    <div>
      <Header/>
      <Form myForm={myForm}/>
      <Output outputValue={input}/>
    </div>
    
    </>
  )
}

export default App;
