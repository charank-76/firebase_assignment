"use client"
import React, { useState } from 'react'
import { addProduct, fetchProducts } from '../core/eventLogic'
import { useRouter } from 'next/navigation';
export default function CreateProductPage() {
    const router = useRouter();
  const [product, setProduct] = useState({
    id: '',
    name: '',
   desc:''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
  
    setProduct({ ...product, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log("Product Submitted:", product)
    await addProduct(product)
  }

  return (
    <div className="min-h-screen flex flex-col text-black items-center justify-center bg-amber-500 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl text-black font-semibold text-center mb-4">
          Add Events
        </h2>

      
        <div>
          <label className="block text-sm font-medium mb-1">Event ID</label>
          <input
           type="text"
            name="id"
            value={product.id}
            onChange={(event)=> {
                setProduct({...product,id:event.target.value})
            }}
            className="w-full border rounded-md px-3 py-2 focus:ring-2 text-gray-700 focus:ring-blue-400 outline-none"
            placeholder="Enter Event ID"
          />
        </div>

        {/* Event Title */}
        <div>
          <label className="block text-sm font-medium mb-1">Event Title</label>
          <input
             type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Enter event title"
          />
        </div>

        {/* Event Description (optional) */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Event Description (optional)
          </label>
          <textarea
           type="text"
            name="desc"
            value={product.desc}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            rows={3}
            placeholder="Enter event description"
          />
        </div>

       
    

       <button 
          type="submit" 
          className="mt-2 bg-blue-600 text-white py-2 px-2  rounded-md hover:bg-blue-700 transition-all"
         onClick={(e)=>{alert("Product Added")}}
        >
          Submit
        </button>
          </form>
          <button
        className="bg-red-500 hover:bg-white mt-2 hover:text-black px-6 py-3 rounded-lg"
        onClick={ (e) => {
         
          router.push("/events");
        }}
      >
        Next
      </button>
      <button
        className="bg-red-500 hover:bg-white mt-2 hover:text-black px-6 py-3 rounded-lg"
        onClick={ (e) => {
         
          router.push("/dashboard");
        }}
      >
        Back to dashboard
      </button>
        </div>
  );
}
