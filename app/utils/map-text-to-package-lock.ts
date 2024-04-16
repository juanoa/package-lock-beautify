import {PackageLock} from "@/app/types/PackageLock";

export const mapTextToPackageLock = (text: string): PackageLock => {
  const json = JSON.parse(text);

  const dependencies = json.packages[""].dependencies;
  const devDependencies = json.packages[""].devDependencies;

  const packages = Object.entries(json.packages).filter(([name]) => name !== "")

  return {
    name: json.name,
    version: json.version,
    lockfileVersion: json.lockfileVersion,
    requires: json.requires,
    dependencies: Object.entries(dependencies).map(([name, version]) => ({ name, version: version as string})),
    devDependencies: Object.entries(devDependencies).map(([name, version]) => ({ name, version: version as string})),
    // @ts-ignore
    packages: packages.map(([name, {version}]) => {
      const {name: packageName, level} = mapDependencyName(name);
      return {name: packageName, version, level};
    })
  };
}

const mapDependencyName = (name: string): {name: string, level: number} => {
  const nameSplitted = name.split("node_modules/");
  const packageName = nameSplitted[nameSplitted.length - 1];
  const level = nameSplitted.length - 1;
  return {name: packageName, level};
}