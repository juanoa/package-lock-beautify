import {Dependency} from "@/app/types/Dependency";
import {FC} from "react";

interface Props {
  dependency: Dependency;
}

export const DependencyCard: FC<Props> = ({dependency}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h2 className="text-xl font-semibold">{dependency.name}</h2>
      <p className="text-gray-500">{dependency.version}</p>
    </div>
  );
}