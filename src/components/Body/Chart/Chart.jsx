import { useEffect,useState } from 'react';

import {useSelector} from "react-redux"
import {
	LineChart,
	ResponsiveContainer,
	Legend, Tooltip,
	Line,
	XAxis,
	YAxis,
	CartesianGrid
} from 'recharts';




const Chart=()=>{
    

     const intialBal=useSelector(state=>state.input.sum)
     const montlyPayment=useSelector(state=>state.input.montlyPayment)
   
     const [arr,setArr]=useState([])
   


     useEffect(()=>{
        const months=[0,1,2,3,4,5,6,7,8,9,10,11,12,13]
        const newArr=[]
        let totalPayment=0
        
        

        months.forEach(value=>{
           

            newArr.push({month:value,balance:intialBal-totalPayment})

            totalPayment=totalPayment+montlyPayment
    
    
          })
          setArr(newArr)
        
    

     


     },[intialBal,montlyPayment])



	return (
		<>
			<h4 >
            Balance of accounts after a number of months
			</h4>
			<ResponsiveContainer width="100%" aspect={3}>
				<LineChart data={arr} margin={{ right: 300 }}>
					<CartesianGrid />
					<XAxis dataKey="month"
						interval={'preserveStartEnd'} />
					<YAxis></YAxis>
					<Legend />
					<Tooltip />
					<Line dataKey="balance"
						stroke="black" activeDot={{ r: 8 }} />
				
				</LineChart>
			</ResponsiveContainer>
		</>
	);
}

export default Chart;
