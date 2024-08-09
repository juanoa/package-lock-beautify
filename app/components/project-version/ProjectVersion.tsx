import React from "react";

interface Props {
  version: string;
}

export const ProjectVersion: React.FC<Props> = ({version}) => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium text-xs px-3 py-1 rounded-full w-min">
      <span>v{version}</span>
    </div>
  );
}