import { useState, useEffect } from 'react';

const useCounter = (action = '+') => { // set default value - param optional
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        if (typeof action !== 'undefined' && action === '-') {
            setCounter((prevCounter) => prevCounter - 1);
        } else {
            setCounter((prevCounter) => prevCounter + 1);
        }
      }, 1000);
  
      return () => clearInterval(interval);
    }, [action]);

    return counter;
}

export default useCounter;