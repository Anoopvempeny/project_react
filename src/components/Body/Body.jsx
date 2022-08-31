import  { useState } from 'react'
import "./body.css"
import {useSelector,useDispatch} from  "react-redux"
import { inputMonltlyPayment } from '../../Redux/Features/inputSlice'
import Chart from './Chart/Chart'


const Body = () => {
  const intialBal=useSelector(state=>state.input.sum)
 
  const [inputValue,setInputValue]=useState('')
  const dispatch=useDispatch()

  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(inputMonltlyPayment(parseInt(inputValue)))
    



  }


  return (

    <div className='body-container'><div><span>Intial Balance:{intialBal}</span>
    
    
    
    
    
    </div>
    <form onSubmit={handleSubmit}>

     <label htmlFor='montlyPaymentInput' ><span>Montly Payment:</span></label>
     <input type="number" placeholder='USD' value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />


    </form>
 

    <Chart/>
    
    
    
    
    
    </div>

  )
}

export default Body