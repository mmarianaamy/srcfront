'use client';
import Image from "next/image";
import useLogin from "./useLogin";
import { useUser } from "./UserContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {

  const { login, loading, error } = useLogin();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useUser();
  const router = useRouter(); // Initialize useRouter

  const handleClick = async () => {
    console.log("handleClick");
    const u = await login("sandra.g", "latte123");
    if (!error){
      setUser(u);
      router.push("/person");
    }
  };
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="border border-gray-300 rounded p-2"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            className="border border-gray-300 rounded p-2"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-red">{error}</p>
          {loading  && <p>Loading...</p>}
          <button
            className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
            onClick={handleClick}
          >
            Submit
          </button>

      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
