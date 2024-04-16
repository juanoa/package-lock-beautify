import {Dependency} from "@/app/types/Dependency";

export type GroupedDependencies = {
    name: string;
    dependencies: Array<Dependency>;
}

export const groupDependenciesByName = (dependencies: Array<Dependency>): Array<GroupedDependencies> => {
    const groupedDependencies: Array<GroupedDependencies> = [];
    dependencies.forEach((dependency) => {
        const existingGroup = groupedDependencies.find((group) => group.name === dependency.name);
        if (existingGroup) {
            existingGroup.dependencies.push(dependency);
        } else {
            groupedDependencies.push({name: dependency.name, dependencies: [dependency]});
        }
    });
    return groupedDependencies;
}