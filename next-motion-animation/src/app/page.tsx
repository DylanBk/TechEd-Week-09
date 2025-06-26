import Link from "next/link";

import AnimateIn from "@/components/Animation";

export default function Home() {
  return (
    <main className="h-[120vh]">
      <AnimateIn>
        <Link href='/examples' className="px-4 py-2 border-2 border-blue-500 rounded-md bg-blue-500/30 shadow-2xl shadow-blue-900 cursor-pointer select-none">animated component</Link>
      </AnimateIn>
    </main>
  );
};