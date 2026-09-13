import type { Technology } from "../type";

interface YourStackProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

export default function YourStack({
  stack,
  onRemove,
  onRemoveAll,
}: YourStackProps) {
  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Your Stack
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {stack.length === 0
              ? "No technologies selected yet."
              : `${stack.length} ${
                  stack.length === 1 ? "technology" : "technologies"
                } selected`}
          </p>
        </div>

        {stack.length > 0 && (
          <button
            onClick={onRemoveAll}
            className="text-sm font-medium text-red-500 hover:text-red-600"
          >
            Remove All
          </button>
        )}
      </div>

      {/* Empty Stack */}
      {stack.length === 0 ? (
        <div className="mt-4 rounded-xl border-2 border-dotted border-[#E2E8F0] py-10 text-center">
          <p className="text-sm text-[#94A3B8]">
            Your stack is empty..
          </p>
        </div>
      ) : (
        <div>

          {/* Count */}
          <p className="mb-4 mt-4 text-sm text-[#64748B]">
            {stack.length}{" "}
            {stack.length === 1 ? "technology" : "technologies"} selected
          </p>

          {/* Selected Technologies */}
          <div className="space-y-3">
            {stack.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3"
              >
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-10 w-10 object-contain"
                />

                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-semibold text-slate-800">
                    {technology.name}
                  </h3>

                  <p className="text-xs text-slate-500">
                    {technology.category}
                  </p>
                </div>

                <button
                  onClick={() => onRemove(technology.id)}
                  className="text-lg font-bold text-slate-400 hover:text-red-500"
                >
                  ×
                </button>
              </div>
            ))}
          </div>

        </div>
      )}
    </aside>
  );
}