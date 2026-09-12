import type { Technology } from "../type";
import TechnologyCard from "./TechnologyCard";

interface TechnologyListProps {
  technologies: Technology[];
  stack: Technology[];
  onAdd: (technology: Technology) => void;
}

export default function TechnologyList({
  technologies,
  stack,
  onAdd,
}: TechnologyListProps) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {technologies.map((technology) => {
        const isAdded = stack.some(
          (item) => item.id === technology.id
        );

        return (
          <TechnologyCard
            key={technology.id}
            technology={technology}
            onAdd={onAdd}
            isAdded={isAdded}
          />
        );
      })}
    </div>
  );
}