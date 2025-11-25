"use client";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../core/firebase";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const [user, setUser] = useState("");
  const router = useRouter();

  return (
    <div className="bg-amber-500 text-white min-h-screen flex gap-y-1 flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Welcome, {user.email}</h1>
      <button
        className="bg-red-500 hover:bg-white hover:text-black px-6 py-3 rounded-lg"
        onClick={async () => {
          await signOut(auth);
          router.push("/signin");
        }}
      >
        Log Out
      </button>
       <button
        className="bg-red-500 hover:bg-white hover:text-black px-6 py-3 rounded-lg"
        onClick={ (e) => {
         
          router.push("/create-product");
        }}
      >
        + Create Product
      </button>
       <button
        className="bg-red-500 hover:bg-white hover:text-black px-6 py-3 rounded-lg"
        onClick={ (e) => {
         
          router.push("/add-event");
        }}
      >
        + Add Events
      </button>
    </div>
  );
}