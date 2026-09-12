import type { Technology } from "../type";

interface TechnologyCardProps {
  technology: Technology;
  onAdd: (technology: Technology) => void;
  isAdded: boolean;
}

export default function TechnologyCard({
  technology,
  onAdd,
  isAdded,
}: TechnologyCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

      {/* Icon  */}
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 p-2">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-9 w-9 object-contain"
          />
        </div>

        <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-500">
          {technology.badge}
        </span>
      </div>

      {/* Name */}
      <h2 className="mt-5 text-xl font-bold text-slate-900">
        {technology.name}
      </h2>

      {/* Description */}
      <p className="mt-2 min-h-16 text-sm leading-6 text-slate-500">
        {technology.description}
      </p>

      {/* Category  */}
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
          {technology.category}
        </span>

        <span className="rounded-full bg-orange-50 px-3 py-1 text-xs text-orange-500">
          {technology.difficulty}
        </span>
      </div>

      {/* Rating */}
      <div className="mt-4 flex items-center gap-1 text-sm">
        <span className="text-yellow-400">★</span>
        <span className="font-semibold text-slate-700">
          {technology.rating}
        </span>
      </div>

      {/* Add Button */}
      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-5 w-full rounded-xl py-2.5 text-sm font-semibold transition ${
          isAdded
            ? "cursor-not-allowed bg-green-100 text-green-600"
            : "bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 text-white hover:opacity-90"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}