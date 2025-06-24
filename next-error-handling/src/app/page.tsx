'use client';

import Link from "next/link";
import { useState } from "react";

import ErrorCreator from "@/components/ErrorCreator";

export default function Home() {
  const [isError, setIsError] = useState<boolean>(false);

  return (
    <main className="p-4">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
      <div className="flex flex-row gap-8">
        <Link className="link" href='/'>Home</Link>

        <Link className="link" href='/abc'>Broken Link</Link>
      </div>

        <button
          className="w-fit px-4 py-2 rounded-md mt-8 bg-red-500/20 hover:bg-red-500/40 border-2 border-red-500 text-red-500 transition-all"
          onClick={() => setIsError(true)}>
          Create Error
        </button>

        {isError && (
          <ErrorCreator
            reset={() => setIsError(false)}
          />
        )}
      </div>
    </main>
  );
}
