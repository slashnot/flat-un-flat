import type { FlatObject, NestedObject } from './types';

export function unflattenObject(flatObj: FlatObject, separator: string = '.'): NestedObject {
    const unflattened: NestedObject = {};

    for (const key in flatObj) {
        // Split the keys by '.' to get individual levels.
        const path = key.split(separator);
        let currentLevel: NestedObject = unflattened;

        // Iterate over each level, creating nested objects as needed.
        path.forEach((subKey, index) => {
            if (index === path.length - 1) {
                // Last segment: assign the value directly
                currentLevel[subKey] = flatObj[key];
            } else {
                // Create an empty object for this key if it doesn't exist yet
                if (!currentLevel[subKey]) {
                    currentLevel[subKey] = {};
                }
                // Move to the next level in the nested structure
                currentLevel = currentLevel[subKey];
            }
        });
    }

    return unflattened;
}