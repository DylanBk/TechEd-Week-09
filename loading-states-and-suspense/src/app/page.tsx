import { Suspense } from "react";
import Loader from "@/components/Loader";

import SlowFC from "@/components/SlowComponent";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<Loader />}>
        <SlowFC />
      </Suspense>
    </main>
  );
};
