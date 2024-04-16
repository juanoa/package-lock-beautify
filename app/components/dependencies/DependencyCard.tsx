import {Dependency} from "@/app/types/Dependency";
import {FC} from "react";
import {PackageLock} from "@/app/types/PackageLock";

interface Props {
  dependency: Dependency;
  packageLock?: PackageLock;
}

export const DependencyCard: FC<Props> = ({dependency, packageLock}) => {

  const isInstalledByUser = packageLock?.dependencies.find((dep) => dep.name === dependency.name) || packageLock?.devDependencies.find((dep) => dep.name === dependency.name)

  return (
    <div className={`bg-white shadow-lg rounded-lg p-4 ${isInstalledByUser ? "border-2 border-green-500" : ""}`}>
      <h2 className="text-xl font-semibold">{dependency.name}</h2>
      <p className="text-gray-500">{dependency.version}</p>
      <p className="text-gray-500">level: {dependency.level}</p>
    </div>
  );
}