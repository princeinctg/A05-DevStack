
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyList from "./components/TechnologyList";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";

import technologies from "./data/technologies.json";
import type { Technology } from "./type";

function App() {
  const [stack, setStack] = useState<Technology[]>([]);

  // Loading state
  const [loading, setLoading] = useState(true);
  const [technologyData, setTechnologyData] = useState<Technology[]>([]);

  // Load JSON data
  useEffect(() => {
    const timer = setTimeout(() => {
      setTechnologyData(technologies);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Add technology
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
    const removedTechnology = stack.find(
      (item) => item.id === id
    );

    setStack(stack.filter((item) => item.id !== id));

    toast.info(
      `${removedTechnology?.name} removed from your stack!`
    );
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    setStack([]);

    toast.error("All technologies removed from your stack!");
  };

  return (
    <>
      <Navbar />

      <Hero />

      <main className="mx-auto max-w-7xl px-4 pb-20">

        {loading ? (
          <div className="py-20 text-center">
            <p className="text-xl font-semibold text-slate-600">
              Loading...
            </p>
          </div>
        ) : (
          <>
            <h2 className="mb-6 text-4xl font-bold text-slate-900">
              Explore The{" "}
              <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>

            <p className="mb-9 text-[#64748B]">
              Pick one technology per category to build your ideal stack.
            </p>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">

              <div className="lg:col-span-3">
                <TechnologyList
                  technologies={technologyData}
                  stack={stack}
                  onAdd={handleAddToStack}
                />
              </div>

              <YourStack
                stack={stack}
                onRemove={handleRemove}
                onRemoveAll={handleRemoveAll}
              />

            </div>
          </>
        )}

      </main>

      <ToastContainer />

      <Footer />
    </>
  );
}

export default App;

