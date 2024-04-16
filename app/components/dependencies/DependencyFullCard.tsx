import {PackageLock} from "@/app/types/PackageLock";
import {FC} from "react";
import {GroupedDependencies} from "@/app/utils/group-dependencies-by-name";

interface Props {
  groupedDependencies: GroupedDependencies;
  packageLock?: PackageLock;

}

export const DependencyFullCard: FC<Props> = ({groupedDependencies, packageLock}) => {
  const dependencyLevelOne = groupedDependencies.dependencies.find((dep) => dep.level === 1)

  console.log(groupedDependencies.dependencies, dependencyLevelOne)

  if (!dependencyLevelOne) {
    return null;
  }

  const isInstalledByUser = packageLock?.dependencies.find((dep) => dep.name === dependencyLevelOne.name)
    || packageLock?.devDependencies.find((dep) => dep.name === dependencyLevelOne.name)

  return (
    <div className={`bg-white shadow-lg rounded-lg p-4 ${isInstalledByUser ? "border-2 border-green-500" : ""}`}>
      <h2 className="text-xl font-semibold">{dependencyLevelOne.name} <span className="text-gray-500 text-sm">@{dependencyLevelOne.version}</span></h2>
      <div className="grid grid-cols-3 gap-4 mt-3">
        {
          groupedDependencies.dependencies.filter((dep) => dep.level && dep.level > 1).map((dependency) => (
            <div key={dependency.name} className="bg-gray-100 p-2 rounded-lg">
              <h3 className="text-lg font-semibold">{dependency.name} <span className="text-gray-500 text-sm">@{dependency.version}</span></h3>
              <p className="text-gray-500">level: {dependency.level}</p>
            </div>
          ))
        }
    </div>
    </div>
  );
}