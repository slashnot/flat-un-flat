/**
 * Represents a flat object with dot-notation keys
 */
export type FlatObject = Record<string, any>;

/**
 * Represents a nested object structure
 */
export type NestedObject = Record<string, any>;

/**
 * Options for flattening operations
 */
export interface FlattenOptions {
    parentKey?: string;
    flatObj?: FlatObject;
}

/**
 * Flattens a nested object into a single-level object with dot-notation keys.
 * Does not preserve arrays as individual values.
 * 
 * @param obj - The nested object to flatten
 * @param parentKey - The parent key prefix for nested properties (default: '')
 * @param flatObj - The accumulator object for flattened properties (default: {})
 * @returns A flattened object with dot-notation keys
 * 
 * @example
 * flattenObject({ a: { b: 1, c: 2 } }) // => { 'a.b': 1, 'a.c': 2 }
 */
export type FlattenObjectFunction = (
    obj: NestedObject,
    parentKey?: string,
    flatObj?: FlatObject
) => FlatObject;

/**
 * Flattens a nested object into a single-level object with dot-notation keys.
 * Arrays are preserved as values without further flattening.
 * 
 * @param obj - The nested object to flatten
 * @param parentKey - The parent key prefix for nested properties (default: '')
 * @param flatObj - The accumulator object for flattened properties (default: {})
 * @returns A flattened object with dot-notation keys and preserved arrays
 * 
 * @example
 * flattenObjectWithArray({ a: { b: [1, 2], c: 2 } }) // => { 'a.b': [1, 2], 'a.c': 2 }
 */
export type FlattenObjectWithArrayFunction = (
    obj: NestedObject,
    parentKey?: string,
    flatObj?: FlatObject
) => FlatObject;

/**
 * Unflattens a flat object with dot-notation keys back into a nested object structure.
 * 
 * @param flatObj - The flat object with dot-notation keys
 * @returns A nested object structure
 * 
 * @example
 * unflattenObject({ 'a.b': 1, 'a.c': 2 }) // => { a: { b: 1, c: 2 } }
 */
export type UnflattenObjectFunction = (flatObj: FlatObject) => NestedObject;
 