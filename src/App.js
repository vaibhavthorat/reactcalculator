
import React, { useState } from 'react'
import Calculator from './Calculator'


export default function App() {
  const [flag,setFlag]=useState(false);
  return <>

{flag?<Calculator/>:null}
  
 
<button style={{backgroundColor:'aquamarine', position:'absolute',left:'49%', top:'5%',  border:'3px solid black',width:'auto',height:'40px'}} onClick={()=>setFlag(!flag)}>Open Calculator</button>
  </>
}
