import {React,useEffect,useRef}  from 'react'

const usePrevState = (state) =>  {
    
    const ref = useRef()  

    useEffect(() => {
        ref.current = state 
        
      },) 
      
      const prevtermState = ref.current
      
      return prevtermState 
}


export default usePrevState;