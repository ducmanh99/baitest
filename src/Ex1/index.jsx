import React, { useState } from 'react'

const Ex1 = () => {
    const arr = [2, 3, -5, -2, 4];
    const [max, setMax] = useState(0);

    for (let i = 0, m = 1; i < arr.length -1; i++, m++){
        if(arr[i] * arr[m] > max){
            setMax(arr[i] * arr[m]);
        }
    }
  return (
    <div>
        <div>output: {max}</div>
    </div>
  )
}

export default Ex1