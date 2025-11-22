import type { FlatObject, NestedObject } from './types';

export function flattenObject(obj: NestedObject, parentKey: string = '', flatObj: FlatObject = {}): FlatObject {
    for (const key in obj) {
        const newKey = parentKey ? `${parentKey}.${key}` : key;
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            // Recursively flatten the object
            flattenObject(obj[key], newKey, flatObj);
        } else {
            // Add non-object value to the flattened object
            flatObj[newKey] = obj[key];
        }
    }
    return flatObj;
}

export function flattenObjectWithArray(obj: NestedObject, parentKey: string = '', flatObj: FlatObject = {}): FlatObject {
    for (const key in obj) {
        const newKey = parentKey ? `${parentKey}.${key}` : key;

        if (Array.isArray(obj[key])) {
            // Include arrays directly as values without flattening further.
            flatObj[newKey] = obj[key];
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
            // Recursively flatten the object
            flattenObjectWithArray(obj[key], newKey, flatObj);
        } else {
            // Add non-object values and non-array values to the flattened object.
            flatObj[newKey] = obj[key];
        }
    }
    return flatObj;
}