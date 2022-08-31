import {configureStore} from "@reduxjs/toolkit"
import inputSlice from "../Features/inputSlice"

const store=configureStore({



    reducer:{
    input:inputSlice,
    }
})

export default store