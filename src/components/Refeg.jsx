import React from 'react'
import { useRef } from 'react'
export default function Refeg() {
    let nameref = useRef()
    let pararef = useRef()
    let fun1 = ()=>
    {
        let msg = "welcome "+ nameref.current.value
        // alert("hellow wordd")
        pararef.current.innerHTML  = msg
        pararef.current.style.color = "Green"
        pararef.current.style.fontSize="25px"
        nameref.current.value = ""
    }
  return (
    <div>
        <p>Enter name : <input type="text" ref={nameref} /></p>
        <input type="button" value="Click here" onClick={()=>fun1()} />
        <p ref={pararef}></p>
        <hr />
        <p>
            a: <input type="text" name="" id="" />
        </p>
        <p>
            b: <input type="text" />
        </p>
        <input type="button" value="+" />
        <h2>Show result here</h2>
    </div>
  )
}
