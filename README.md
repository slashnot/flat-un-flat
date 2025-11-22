# flatten-un-flatten

A lightweight, TypeScript-first library for flattening and unflattening nested objects with dot-notation or custom separators. Perfect for handling complex data structures in configuration files, APIs, and data transformation pipelines.

[![npm version](https://img.shields.io/npm/v/flat-un-flat.svg)](https://www.npmjs.com/package/flat-un-flat)
[![license](https://img.shields.io/npm/l/flat-un-flat.svg)](LICENSE)
[![typescript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)](https://www.typescriptlang.org/)

## Features

✨ **Full TypeScript Support** - Complete type definitions and IntelliSense  
🚀 **Zero Dependencies** - Lightweight and dependency-free  
📦 **Tree-shakeable** - Modern ESM exports  
🎯 **Two Flatten Methods** - Regular or array-preserving flattening  
🔧 **Customizable Separators** - Use any separator for unflattening  
📚 **Well Documented** - JSDoc comments for IDE hints

## Installation

```bash
npm install flatten-un-flatten
# or
pnpm add flatten-un-flatten
# or
yarn add flatten-un-flatten
```

## Quick Start

### Flatten Objects

```typescript
import { flattenObject } from 'flatten-un-flatten';

const nested = {
  user: {
    name: 'John Doe',
    email: 'john@example.com',
    address: {
      street: '123 Main St',
      city: 'New York',
      zip: '10001'
    }
  }
};

const flat = flattenObject(nested);
// Result:
// {
//   'user.name': 'John Doe',
//   'user.email': 'john@example.com',
//   'user.address.street': '123 Main St',
//   'user.address.city': 'New York',
//   'user.address.zip': '10001'
// }
```

### Unflatten Objects

```typescript
import { unflattenObject } from 'flatten-un-flatten';

const flat = {
  'user.name': 'John Doe',
  'user.email': 'john@example.com',
  'user.address.city': 'New York'
};

const nested = unflattenObject(flat);
// Result:
// {
//   user: {
//     name: 'John Doe',
//     email: 'john@example.com',
//     address: {
//       city: 'New York'
//     }
//   }
// }
```

### Flatten with Array Preservation

When you have arrays in your nested object and want to keep them as values instead of flattening further:

```typescript
import { flattenObjectWithArray } from 'flatten-un-flatten';

const nested = {
  config: {
    servers: ['server1', 'server2', 'server3'],
    database: {
      hosts: ['db1.example.com', 'db2.example.com'],
      port: 5432
    }
  }
};

const flat = flattenObjectWithArray(nested);
// Result:
// {
//   'config.servers': ['server1', 'server2', 'server3'],
//   'config.database.hosts': ['db1.example.com', 'db2.example.com'],
//   'config.database.port': 5432
// }
```

### Custom Separators

```typescript
import { unflattenObject } from 'flatten-un-flatten';

const flat = {
  'user__name': 'John Doe',
  'user__email': 'john@example.com'
};

// Use double underscore as separator
const nested = unflattenObject(flat, '__');
// Result:
// {
//   user: {
//     name: 'John Doe',
//     email: 'john@example.com'
//   }
// }
```

## API Reference

### `flattenObject(obj, parentKey?, flatObj?)`

Flattens a nested object into a single-level object with dot-notation keys. Does not preserve arrays.

**Parameters:**
- `obj: NestedObject` - The nested object to flatten
- `parentKey?: string` - (Optional) Parent key prefix for nested properties (default: `''`)
- `flatObj?: FlatObject` - (Optional) Accumulator object for flattened properties (default: `{}`)

**Returns:** `FlatObject` - A flattened object with dot-notation keys

### `flattenObjectWithArray(obj, parentKey?, flatObj?)`

Flattens a nested object while preserving arrays as values without further flattening.

**Parameters:**
- `obj: NestedObject` - The nested object to flatten
- `parentKey?: string` - (Optional) Parent key prefix for nested properties (default: `''`)
- `flatObj?: FlatObject` - (Optional) Accumulator object for flattened properties (default: `{}`)

**Returns:** `FlatObject` - A flattened object with dot-notation keys and preserved arrays

### `unflattenObject(flatObj, separator?)`

Unflattens a flat object with dot-notation or custom separator keys back into a nested object structure.

**Parameters:**
- `flatObj: FlatObject` - The flat object with dot-notation or separator keys
- `separator?: string` - (Optional) Separator for splitting keys (default: `'.'`)

**Returns:** `NestedObject` - A nested object structure

## Use Cases

- **Environment Variables** - Flatten/unflatten config objects from env vars
- **Form Data** - Convert nested form structures to flat key-value pairs
- **API Transformations** - Convert between different API response formats
- **Database Operations** - Transform nested documents to flat records
- **Configuration Management** - Handle complex configuration hierarchies
- **State Management** - Flatten Redux/Zustand store state for persistence

## TypeScript Support

This library is built with TypeScript and provides complete type definitions:

```typescript
import type { FlatObject, NestedObject } from 'flatten-un-flatten/types';

const myObject: NestedObject = { /* ... */ };
const flattened: FlatObject = flattenObject(myObject);
```

## Browser & Node Support

- Node.js 14+
- All modern browsers (ES2020+)
- CommonJS and ESM modules

## Performance

The library is optimized for performance:
- Recursive flattening uses iterative approach to avoid stack overflow
- No unnecessary object copies
- Minimal memory footprint

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © [Ramkumar K](https://github.com/slashnot)

## Author

**Ramkumar K**
- GitHub: [@slashnot](https://github.com/slashnot)
- Email: slashnot84@gmail.com
- Homepage: [https://slashnot.github.io/flatten-un-flatten/](https://slashnot.github.io/flatten-un-flatten/)

## Changelog

### v0.0.1
- Initial release
- `flattenObject()` - Flatten nested objects
- `flattenObjectWithArray()` - Flatten with array preservation
- `unflattenObject()` - Unflatten objects with custom separators
- Full TypeScript support
- Zero dependencies
