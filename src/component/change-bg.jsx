
import {useState} from 'react'

function Changebg() {

const [color, setColor] = useState("grey")

  return (
    <>
     <h1 className='font-Inter, system-ui, Avenir, Helvetica, Arial, sans-serif text-5xl p-2 font-bold' style={{color:color}}>Change-Background</h1>
    <div style={{height:'450px', width:"450px" , background:color, margin:'60px', borderRadius:'20px'}}></div>
    <button className='border bg-red-600 p-2 px-6 text-2xl text-white rounded-full' onClick={()=>{setColor('red')}}>Red</button>
    <button className='border bg-blue-800 p-2 px-6 text-2xl text-white rounded-full' onClick={()=>{setColor('blue')}}>Blue</button>
    <button className='border bg-green-800 p-2 px-6 text-2xl text-white rounded-full' onClick={()=>{setColor('green')}}>Green</button>
    <button className='border bg-black p-2 px-6 text-2xl text-white rounded-full' onClick={()=>{setColor('black')}}>Black</button>
    <button className='border bg-purple-800 p-2 px-6 text-2xl text-white rounded-full' onClick={()=>{setColor('purple')}}>Purple</button>
    
    </>
  )
}

export default Changebg;