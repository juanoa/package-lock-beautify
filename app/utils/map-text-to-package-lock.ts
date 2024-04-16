import {PackageLock} from "@/app/types/PackageLock";

export const mapTextToPackageLock = (text: string): PackageLock => {
  const json = JSON.parse(text);

  const dependencies = json.packages[""].dependencies;
  const devDependencies = json.packages[""].devDependencies;

  return {
    name: json.name,
    version: json.version,
    lockfileVersion: json.lockfileVersion,
    requires: json.requires,
    dependencies: Object.entries(dependencies).map(([name, version]) => ({ name, version: version as string})),
    devDependencies: Object.entries(devDependencies).map(([name, version]) => ({ name, version: version as string})),
  };
}