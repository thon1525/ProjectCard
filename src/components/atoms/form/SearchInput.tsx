"use client"
import React, { useState } from 'react'

const SearchInput = () => {
    const [search,setSearch] = useState("")
    console.log(search);
  return (
    <div>
      <input type="text" 
      className='outline-none border-2 w-[300px] h-[40px] p-4 rounded-md focus:ring-green-200' placeholder='Enter name'
      onChange={(e) => setSearch(e.target.value)}
      />
      <button className='w-[100px] h-[40px] text-white bg-blue-900 rounded-md ml-2'>Search</button>
    </div>
  )
}

export { SearchInput}
