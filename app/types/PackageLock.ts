import {Dependency} from "@/app/types/Dependency";

export type PackageLock = {
  name: string;
  version: string;
  lockfileVersion: number;
  requires: boolean;
  dependencies: Array<Dependency>;
  devDependencies: Array<Dependency>;
  packages: Array<Dependency>;
}