"use client";

import { useEffect, useState } from "react";
import { fetchProducts } from "../core/eventLogic";
import { useRouter } from "next/navigation";
import { collection, onSnapshot } from "firebase/firestore";
import { database } from "../core/firebase";

export default function Products() {
    const router = useRouter();
  const [events, setProducts] = useState([]);

  useEffect(() => {
    //alert('hello')

    const productRef = collection(database, "Events");
    const unsubcribe = onSnapshot(productRef, (eventSnapshot) => {
      const temp = eventSnapshot.docs.map((event) => ({
        ...event.data(),
        id: event.id,
      }));
      setProducts(temp);
    });

    return () => unsubcribe();
  }, []);

  return (
    <div className="min-h-screen bg-amber-500 flex flex-col items-center p-4">
      <h1 className="text-2xl font-semibold text-black mb-6">
        Event Details
      </h1>

      <div className="w-full max-w-md space-y-4">
        {events.length === 0 && (
          <p className="text-center text-black">No events found.</p>
        )}

        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white p-4 rounded-xl shadow-md border hover:scale-105"
          >
            <h2 className="text-lg font-bold text-gray-800">
              {event.name}
            </h2>
            <p className="text-sm text-gray-700 mt-2">
              {event.desc || "No description provided"}
            </p>
          </div>
        ))}
      </div>

      <button
        className="bg-red-500 hover:bg-white hover:text-black mt-6 px-6 py-3 rounded-lg"
        onClick={() => router.push("/add-event")}
      >
        Back
      </button>
    </div>
  );
}
