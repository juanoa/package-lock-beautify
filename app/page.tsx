"use client";
import React, {useState} from "react";
import {PackageLock} from "@/app/types/PackageLock";
import {mapTextToPackageLock} from "@/app/utils/map-text-to-package-lock";
import {DependencyCard} from "@/app/components/dependencies/DependencyCard";
import {PackageLockForm} from "@/app/components/package-lock-form";
import {DependencyFullCard} from "@/app/components/dependencies/DependencyFullCard";
import {groupDependenciesByName} from "@/app/utils/group-dependencies-by-name";

export default function Home() {
  const [packageLock, setPackageLock] = useState<PackageLock>()


  if (!packageLock) {
    return <PackageLockForm onSubmitPackageJson={setPackageLock} />
  }

  return (
    <div className="flex flex-col gap-4 w-2/3 m-auto min-h-screen">
      <h1 className="text-3xl font-semibold"><code>{packageLock.name}</code> package beautified</h1>
      <pre className="text-xs">{packageLock.version}</pre>
      <div className="flex flex-col gap-4 justify-centerd">
        <h2>Project</h2>
        <h3>Dependencies</h3>
        <div className="grid grid-cols-3 gap-4">
          {
            packageLock.dependencies.map((dependency) => (
              <DependencyCard dependency={dependency} key={dependency.name}/>
            ))
          }
        </div>
        <h3>Dev dependencies</h3>
        <div className="grid grid-cols-3 gap-4">
          {
            packageLock.devDependencies.map((dependency) => (
              <DependencyCard dependency={dependency} key={dependency.name}/>
            ))
          }
        </div>
        <h3>Packages</h3>
        <div className="grid grid-cols-1d gap-4">
          {
            groupDependenciesByName(packageLock.packages).map((dependency) => (
              <DependencyFullCard groupedDependencies={dependency} key={dependency.name} packageLock={packageLock}/>
            ))
          }
        </div>
      </div>
    </div>
  );
}
