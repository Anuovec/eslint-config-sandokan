# eslint-plugin-sandokan

Eslint opinionated rules for react projects.

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

## TODO

- unicorn/filename-case
- unicorn/no-null
- unicorn/no-useless-undefined
- unicorn/no-array-callback-reference
