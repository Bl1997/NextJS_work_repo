import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div style={{justifyContent:"space-around",backgroundColor:"teal",color:"white",fontSize:"larger",padding:"20px",display:"flex"}}>
       <div> <Link href={"/about"}>About page</Link></div>
       <div> <Link href={"/Counter"}>Counter Page</Link></div>
       <div> <Link href={"/Todos"}>Todo Page</Link></div>
    </div>
  )
}

export default Navbar