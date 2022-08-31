import { useEffect,useState } from 'react'
import "./sidebar.css"
import { inputValue, inputSum } from "../../Redux/Features/inputSlice"
import {useDispatch,useSelector} from "react-redux"
import Show from './Show/Show'


const Sidebar = () => {
  const [inputVal,setInputVal]=useState("")
  const [count,setCount]=useState(0)

  const dispatch=useDispatch()
  const selector=useSelector(state=>state.input.value)
 

   const handleSubmit=(e)=>{

    e.preventDefault();
    if(inputVal){
      dispatch(inputValue({balance:parseInt(inputVal)}))
      dispatch(inputSum())
    setCount(count=>count+1)

    }
 
    setInputVal("")

    
    

   }

   useEffect(()=>{

  

   },[selector])



  return (
    <div className='sidebar-container'>


      <h3 className="sidebar-title">Accounts</h3>
      <span>Count:{count}</span>
      <div className="sidebar-input">
        <form onSubmit={handleSubmit}>
         <label htmlFor="sidebar-input">Balance :</label>
         <input onChange={(e)=>setInputVal(e.target.value)} type="number" value={inputVal} id="sidebar-input" /> 
         <button >submit</button>   


        </form>
      </div>

      {selector.map((value,i)=>{return (<Show key={i} value={value} />)})}

    </div>
  )
}

export default Sidebar