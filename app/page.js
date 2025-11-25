"use client";
import { useState } from "react";
import { createAccount } from "./core/auth";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
 const router = useRouter();
  return (
    <>
      
        <div className="min-h-screen flex justify-center items-center bg-amber-500">
      <div className="bg-white flex flex-col shadow-2xl rounded-2xl p-10  w-[500px]  hover:scale-[1.02]">
        <h1 className="text-3xl font-bold text-center text-amber-700 mb-6">
        Sign Up
        </h1>
 <input
          type="email"
          placeholder="abc@gmail.com"
          className="w-[400px] bg-white p-4 text-black"
          onChange={(event) => setEmail(event.target.value)}  
           required
       />
        <input
          type="password"
          placeholder="XXXXX"
          className="w-[400px] bg-white p-4 text-black"
          onChange={(event) => setPassword(event.target.value)} 
              required
        />

        <button
          onClick={ async (event) => {
            await createAccount(email, password);
            alert("Account created! Check your email for verification.");
            router.push("/signin");
          }}
          className="bg-amber-700 p-3 my-3 text-white w-[200px] mx-auto rounded-2xl"
        >
          Sign Up
        </button>
        </div>
      </div>
    </>
  );
}