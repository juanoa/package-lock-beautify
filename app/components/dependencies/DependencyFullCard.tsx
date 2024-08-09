import {PackageLock} from "@/app/types/PackageLock";
import {FC, useState} from "react";
import {GroupedDependencies} from "@/app/utils/group-dependencies-by-name";
import {GoToNpmIcon} from "@/app/components/go-to-npm-icon/GoToNpmIcon";
import {SubDependencyCard} from "@/app/components/dependencies/SubDependencyCard";

interface Props {
  groupedDependencies: GroupedDependencies;
  packageLock?: PackageLock;

}

export const DependencyFullCard: FC<Props> = ({groupedDependencies, packageLock}) => {
  const [isHovered, setIsHovered] = useState(false);

  console.log(isHovered)

  const dependencyLevelOne = groupedDependencies.dependencies.find((dep) => dep.level === 1)

  if (!dependencyLevelOne) {
    return null;
  }

  const isInstalledByUser = packageLock?.dependencies.find((dep) => dep.name === dependencyLevelOne.name)
    || packageLock?.devDependencies.find((dep) => dep.name === dependencyLevelOne.name)

  return (
    <div
      className={`bg-white shadow-lg rounded-lg p-4 ${isInstalledByUser ? "border-2 border-purple-500" : ""} relative`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className="absolute top-2 right-2">
          <GoToNpmIcon dependency={dependencyLevelOne} />
        </div>
      )}
      <h2 className="text-xl font-semibold">{dependencyLevelOne.name} <span className="text-gray-500 text-sm">@{dependencyLevelOne.version}</span></h2>
      <div className="grid grid-cols-3 gap-4 mt-3">
        {
          groupedDependencies.dependencies.filter((dep) => dep.level && dep.level > 1)
            .map((dependency) => <SubDependencyCard dependency={dependency} key={dependency.name}/> )
        }
      </div>
    </div>
  );
}