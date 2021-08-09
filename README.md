# CSS Valid

This NPM package comes in two flavors:

1. As a CLI for development
2. As a NPM package that can brought in and the response is in JSON.

Currently this takes five arguments to work:

- **input**: the directory being read into the package
- **output**: where the XML output file is to be written to
- **file**: if not reading a directory then reading a file
- **exclusion**: exclude a file if reading a directory
- **cli**: wether or not this is called as a CLI

## Installation

NPM:

```bash
npm i @epubknowledge/css-valid
```

yarn:

```bash
yarn add @epubknowledge/css-valid
```

## CLI

If using this as a CLI refer to the [CLI Documentation](./cli.md).

## Package

If using this as a package the refer to the [Package Documentation](./package.md).

## Bash

This originated from a bash script I wrote many eons ago but you can reference it [here](./bash/cssvalid.sh).

## Future Plans

- [] Add testing
- [] finish package
