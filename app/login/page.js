"use client";
import { useState } from "react";
import { login, createAccount, logout, resetEmail } from "../core/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="bg-blue-500 min-h-screen w-full flex flex-col items-center justify-center">
        <input
          type="email"
          placeholder="abc@gmail.com"
          className="w-[400px] bg-white p-4"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="XXXXX"
          className="w-[400px] bg-white p-4"
          onChange={(event) => setPassword(event.target.value)}
        />

        <button
         onClick={ async (event) => {
             console.log(email,password)
            await login(email,password)
          }}
          className="bg-yellow-200 w-[200px] p-4 mt-5"
        >
          Login
        </button>

        <button
          onClick={ async (event) => {
            console.log(email,password)
            await createAccount(email,password)
          }}
          className="bg-orange-200 w-[200px] p-4 mt-5"
        >
          Sign Up
        </button>

          <button
          onClick={ async (event) => {
            console.log(email,password)
            await resetEmail(email,password)
          }}
          className="bg-green-200 w-[200px] p-4 mt-5"
        >
          Send Reset Email
        </button>
      </div>
    </>
  );
}