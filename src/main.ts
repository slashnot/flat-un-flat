import { flattenObjectWithArray } from './flatten';
import { flattenObject as simpleFlattenObject } from './flatten';
import type { NestedObject, FlatObject } from './types';

export const flattenObject = (object: NestedObject, options = { preserveArrays: false }): FlatObject => {
    const { preserveArrays } = options;

    if (preserveArrays) {
        return flattenObjectWithArray(object);
    } else {
        return simpleFlattenObject(object);
    }
}

export { unflattenObject } from './unflatten';