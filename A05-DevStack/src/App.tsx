import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyList from "./components/TechnologyList";

import technologies from "./data/technologies.json";
import type { Technology } from "./type";

function App() {
  const [stack, setStack] = useState<Technology[]>([]);

  const handleAddToStack = (technology: Technology) => {
    setStack([...stack, technology]);
  };

  return (
    <>
      <Navbar />

      <Hero />

      <main className="mx-auto max-w-7xl px-4 pb-20">

        <h2 className="mb-6 text-4xl font-bold text-slate-900">
  Explore The{" "}
  <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
    Technologies
  </span>
</h2>

<p className="text-[#64748B] mb-9 ">Pick one technology per category to build your ideal stack.</p>
        <TechnologyList
          technologies={technologies}
          stack={stack}
          onAdd={handleAddToStack}
        />

      </main>
    </>
  );
}

export default App;