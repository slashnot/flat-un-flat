import { flattenObjectWithArray } from './flatten';
import { flattenObject as simpleFlattenObject } from './flatten';
import type { NestedObject, FlatObject } from './types';

export const flattenObject = (object: NestedObject, options = { preserverArrays: false }): FlatObject => {
    const { preserverArrays } = options;

    if (preserverArrays) {
        return flattenObjectWithArray(object);
    } else {
        return simpleFlattenObject(object);
    }
}

export { unflattenObject } from './unflatten';