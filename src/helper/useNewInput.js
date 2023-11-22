import axios from "axios";
import { useEffect, useState } from "react";

  export const useNewInput = (input, getInput) => {
    const [state, setState] = useState();  
    
    if(input === ''){
      setState(getInput)
    }else{
      setState(input)
    }
  return state; 
}

