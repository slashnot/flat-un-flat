/**
 * flat-un-flat - A lightweight library to flatten and unflatten nested objects
 * @packageDocumentation
 */

/**
 * Represents a flat object with dot-notation keys
 */
export declare type FlatObject = Record<string, any>;

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
export declare const flattenObject: (object: NestedObject, options?: {
    preserveArrays: boolean;
}) => FlatObject;

/**
 * Options for flattening operations
 */
export declare interface FlattenOptions {
    parentKey?: string;
    flatObj?: FlatObject;
}

/**
 * Represents a nested object structure
 */
export declare type NestedObject = Record<string, any>;

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
export declare function unflattenObject(flatObj: FlatObject, separator?: string): NestedObject;

export { }
