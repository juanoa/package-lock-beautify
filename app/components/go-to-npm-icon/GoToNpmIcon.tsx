import {Dependency} from "@/app/types/Dependency";
import {NpmIcon} from "@/app/components/go-to-npm-icon/NpmIcon";
import React, {useMemo} from "react";

interface Props {
  dependency: Dependency;

}

const NPM_BASE_URL = "https://www.npmjs.com/package/$1"

export const GoToNpmIcon: React.FC<Props> = ({dependency}) => {

  const url = useMemo(() => NPM_BASE_URL.replace("$1", dependency.name), [dependency]);

  return (
    <a href={url} target="_blank" rel="noreferrer" className="size-20">
      <NpmIcon />
    </a>
  )
}