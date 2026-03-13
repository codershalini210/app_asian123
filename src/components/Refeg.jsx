import React from 'react'
import { useRef } from 'react'
import { href } from 'react-router-dom'
export default function Refeg() {
    let nameref = useRef()
    let pararef = useRef()
    let aref = useRef()
    let bref = useRef()
    let mref = useRef()
    let fun1 = ()=>
    {
        let msg = "welcome "+ nameref.current.value
        // alert("hellow wordd")
        pararef.current.innerHTML  = msg
        pararef.current.style.color = "Green"
        pararef.current.style.fontSize="25px"
        nameref.current.value = ""
    }
    function calculate(op)
    {
        let a = parseInt(aref.current.value)
        let b = parseInt(bref.current.value)
        switch (op) {
            case '+':
        mref.current.innerHTML = "Sum is "+ (a+b)        
                break;
            case '-':
                mref.current.innerHTML = "difference is "+ (a-b)
                break;
            case '*':
            mref.current.innerHTML = "Multiplication is "+ (a*b)
                break;
            case '/':
            mref.current.innerHTML = "Division is "+ (a/b)    
                break;                    
        }
      
    }
  return (
    <div>
        <p>Enter name : <input type="text" ref={nameref} /></p>
        <input type="button" value="Click here" onClick={()=>fun1()} />
        <p ref={pararef}></p>
        <hr />
        <p>
            a: <input type="text" name="" ref={aref}/>
        </p>
        <p>
            b: <input type="text" ref={bref} />
        </p>
        <input type="button" value="+" onClick={()=>calculate('+')} />
        <input type="button" value="-" onClick={()=>calculate('-')} />
        <input type="button" value="*" onClick={()=>calculate('*')} />
        <input type="button" value="/" onClick={()=>calculate('/')} />
        <h2 ref={mref}></h2>
    </div>
  )
}
