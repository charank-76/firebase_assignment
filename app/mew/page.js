"use client"
import React, { useState } from 'react'

export default function CatPage(){
    const [catData,setCatdata] = useState({})
    async function getCatFacts(){

        const url = "https://meowfacts.herokuapp.com/";
        const data = await fetch(url).then((data)=> data.json());
       
        setCatdata(data);
    }
    return(
        <div className='min-h-screen flex flex-col justify-center items-center bg-amber-600'>
            <img src="https://cataas.com/cat/cute" alt="Cute Cat" className='w-96 h-96 rounded-lg shadow-lg mb-6' onClick={getCatFacts}/>
           
            <div className='bg-white text-black p-4 rounded-lg shadow-lg max-w-lg text-center'>{catData.data}</div>
            </div>
    )
}