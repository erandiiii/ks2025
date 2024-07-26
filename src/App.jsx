import { useState } from 'react'
import { emri } from './scripts/test1'
import mbiemri from "./scripts/test2"
import * as teDhenat from "./scripts/test3"
// import * as infoo from "./scripts/test6"

function App() {
  
  //Imperativ
  // const para = document.createElement('p');
  // para.textContent = "This is visible";
  // document.getElementById('root').append(para);

  return (
    <>
      <h1>Emri: {emri}</h1>
      <h1>Mbiemri: {mbiemri}</h1>
      <h1>Mosha: {teDhenat.mosha}</h1>
      <h1>Profesioni: {teDhenat.profesioni}</h1>
      {/* <infoo.default/> */}
      
    </>
  )
}

export default App
