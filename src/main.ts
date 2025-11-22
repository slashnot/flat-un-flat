import { flattenObjectWithArray } from './flatten';
import { flattenObject as simpleFlattenObject } from './flatten';
import type { NestedObject, FlatObject } from './types';

/**
 * Flattens a nested object into a single-level object with dot-notation keys.
 *
 * @param object - The nested object to flatten
 * @param options - Configuration options for flattening behavior
 * @param options.preserveArrays - When true, arrays are preserved as values without flattening. When false (default), arrays are flattened into individual keys
 * @returns A flattened object with dot-notation keys
 *
 * @example
 * // Without preserveArrays (default)
 * flattenObject({ a: { b: 1, c: [2, 3] } })
 * // => { 'a.b': 1, 'a.c.0': 2, 'a.c.1': 3 }
 *
 * @example
 * // With preserveArrays
 * flattenObject({ a: { b: 1, c: [2, 3] } }, { preserveArrays: true })
 * // => { 'a.b': 1, 'a.c': [2, 3] }
 */
export const flattenObject = (object: NestedObject, options = { preserveArrays: false }): FlatObject => {
    const { preserveArrays } = options;

    if (preserveArrays) {
        return flattenObjectWithArray(object);
    } else {
        return simpleFlattenObject(object);
    }
}