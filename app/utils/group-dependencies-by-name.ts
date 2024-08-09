import {Dependency} from "@/app/types/Dependency";

export type GroupedDependencies = {
    name: string;
    dependencies: Array<Dependency>;
}

export const groupDependenciesByName =
  (dependencies: Array<Dependency>, sorting: "alphabetically" | "dependencies"): Array<GroupedDependencies> => {
    const groupedDependencies: Array<GroupedDependencies> = [];
    dependencies.forEach((dependency) => {
        const existingGroup = groupedDependencies.find((group) => group.name === dependency.name);
        if (existingGroup) {
            existingGroup.dependencies.push(dependency);
        } else {
            groupedDependencies.push({name: dependency.name, dependencies: [dependency]});
        }
    });

    if (sorting === "alphabetically") {
        return groupedDependencies.sort((a, b) => a.name.localeCompare(b.name));
    }
    return groupedDependencies.sort((a, b) => b.dependencies.length - a.dependencies.length);
}