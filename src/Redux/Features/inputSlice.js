import {createSlice} from "@reduxjs/toolkit"



const initialState={value:[],sum:0,montlyPayment:0}

export const inputSlice=createSlice({

    name:"input",
    initialState,
    reducers:{
        inputValue:(state,action)=>{

            state =state.value.push(action.payload)

        },
        inputSum:(state)=>{

            
            let sum=0;
            state.value.forEach((value)=>sum+=value.balance)
            state.sum=sum;
         

            

        },
        inputMonltlyPayment:(state,{payload})=>{
        state.montlyPayment=payload;

        }
        

    }

})

export const {inputValue,inputSum,inputMonltlyPayment} =inputSlice.actions

export default inputSlice.reducer