import {Dependency} from "@/app/types/Dependency";
import {FC, useState} from "react";
import {GoToNpmIcon} from "@/app/components/go-to-npm-icon/GoToNpmIcon";

interface Props {
  dependency: Dependency;
}

export const SubDependencyCard: FC<Props> = ({dependency}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-gray-100 p-2 rounded-lg relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className="absolute top-2 right-2">
          <GoToNpmIcon dependency={dependency} />
        </div>
      )}
      <h3 className="text-lg font-semibold">{dependency.name} <span
        className="text-gray-500 text-sm">@{dependency.version}</span></h3>
      <p className="text-gray-500">level: {dependency.level}</p>
    </div>
  );
}