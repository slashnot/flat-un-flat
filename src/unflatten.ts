import type { FlatObject, NestedObject } from './types';

/**
 * Unflattens a flat object with dot-notation (or custom separator) keys back into a nested object structure.
 *
 * @param flatObj - The flat object with dot-notation keys to unflatten
 * @param separator - The separator used in the flattened keys (default: '.')
 * @returns A nested object structure reconstructed from the flat object
 *
 * @example
 * // Using default separator
 * unflattenObject({ 'a.b': 1, 'a.c': 2, 'd': 3 })
 * // => { a: { b: 1, c: 2 }, d: 3 }
 *
 * @example
 * // Using custom separator
 * unflattenObject({ 'a_b': 1, 'a_c': 2 }, '_')
 * // => { a: { b: 1, c: 2 } }
 */
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