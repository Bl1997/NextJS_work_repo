import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Navbar from './Navbar'

const Todos = () => {
    const [todos,setTodos]=useState([])
const getTodos=async()=>{
    const result=await fetch(" http://localhost:8080/todos")
    const data = await result.json()
    setTodos(data)
}


useEffect(()=>{
  getTodos()
},[])
console.log("todos",todos)
  return (
    <div>
        <Navbar/>
            <Head>
        <title>Todos</title>
      
       
      </Head>
      <h1>Todos</h1>
      {
        todos.map((todo)=>{
            return <div style={{textAlign:"center"}} key={todo.id}><h2>{todo.title} - {todo.status}</h2>
             
            </div>
        })
      }
    </div>
  )
}

export default Todos