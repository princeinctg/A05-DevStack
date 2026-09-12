import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyList from "./components/TechnologyList";
import YourStack from "./components/YourStack";

import technologies from "./data/technologies.json";
import type { Technology } from "./type";

function App() {
  const [stack, setStack] = useState<Technology[]>([]);

 const handleAddToStack = (technology: Technology) => {
  const alreadyAdded = stack.some(
    (item) => item.id === technology.id
  );

  if (alreadyAdded) {
    toast.warning(`${technology.name} is already in your stack!`);
    return;
  }

  setStack([...stack, technology]);

  toast.success(`${technology.name} added to your stack!`);
};

  // Remove one technology
  const handleRemove = (id: string) => {
    setStack(stack.filter((item) => item.id !== id));
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <>
      <Navbar></Navbar>

      <Hero></Hero>

      <main className="mx-auto max-w-7xl px-4 pb-20">

        <h2 className="mb-6 text-4xl font-bold text-slate-900">
          Explore The{" "}
          <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        <p className="mb-9 text-[#64748B]">
          Pick one technology per category to build your ideal stack.
        </p>

        {/* Technologies + Your Stack */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">

          {/* Technology Cards */}
          <div className="lg:col-span-3">
            <TechnologyList
              technologies={technologies}
              stack={stack}
              onAdd={handleAddToStack}
            />
          </div>

          {/* Your Stack */}
          <YourStack
            stack={stack}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />

        </div>

      </main>
       <ToastContainer></ToastContainer>
       
    </>
  );
}

export default App;