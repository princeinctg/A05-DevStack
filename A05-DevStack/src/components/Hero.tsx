import bannerStack from "../assets/banner-stack.png";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <div className="flex flex-col items-center justify-between gap-10 md:flex-row">

        {/* Left Content */}
        <div className="max-w-xl text-center md:text-left">

          <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
            Build Your Ideal
            <br />

            {/* Gradient Highlight */}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 text-base leading-7 text-slate-500 md:text-lg">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">

            {/* Primary Button */}
            <button className="btn rounded-lg border-0 bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 text-white">
              Explore Technologies
            </button>

            <button className="btn btn-outline rounded-lg">
              Learn More
            </button>

          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src={bannerStack}
            alt="Development stack"
          />
        </div>

      </div>
    </section>
  );
}