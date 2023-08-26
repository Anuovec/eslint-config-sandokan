# eslint-plugin-sandokan

Eslint opinionated configuration for react projects, that use:

- React with hooks or are in process of refactoring to hooks
- Typescript
- React Query for data fetching
- Recoil as state management library
- Jest with Testing library for unit, integration testing and UI interaction testing

![Sandokan](sandokan.jpg)

## Usage

- If you don't have ESLint yet configured for your project, follow [these instructions](https://github.com/eslint/eslint#installation-and-usage).
- Install `eslint-plugin-sandokan` using `npm` (or `yarn`) for you project or globally:

```sh
npm install eslint-plugin-sandokan --save-dev # install for your project
npm install eslint-plugin-sandokan -g         # or install globally
```

- Add `sandokan` to the `extends` option to enable all recommended rules:

```json
{
  "extends": ["sandokan"]
}
```

### Additional recommendation

This configuration is meant to be used with:

- [TypeScript](https://www.typescriptlang.org/) and the [`noUnusedLocals`](https://www.typescriptlang.org/tsconfig#noUnusedLocals) setting.
- [`@ianvs/prettier-plugin-sort-imports`](https://github.com/ianvs/prettier-plugin-sort-imports) [Prettier](https://prettier.io/) plugin.

## Testing config

The configuration is made for Jest and Testing Library.
it is applied to all files that ends with `.test.` or `.spec.`.

## TODO

- unicorn/filename-case
