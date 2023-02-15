import React, { useState } from 'react'
import Head from 'next/head'
import Navbar from './Navbar'

const Counter = () => {
    const [count,setCount]=useState(0)

    const handleAdd=()=>{
        setCount(count+1)
    }
    const handleReduce=()=>{
        setCount(count-1)

    }
  return (
    <div>
        <Navbar/>
          <Head>
        <title>Counter</title>
      
       
      </Head>
<h1>Counter:{count}</h1>
<button disabled={count===0} onClick={handleReduce}>Reduce</button>
<button onClick={handleAdd}>Add</button>


    </div>
  )
}

export default Counter