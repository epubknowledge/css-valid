![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/epubknowledge/css-valid) ![Code Climate issues](https://img.shields.io/codeclimate/issues/epubknowledge/css-valid) ![Github code size](https://img.shields.io/github/languages/code-size/epubknowledge/css-valid) ![GitHub issues](https://img.shields.io/github/issues/epubknowledge/css-valid) ![GitHub last commit](https://img.shields.io/github/last-commit/epubknowledge/css-valid) [![GitHub forks](https://img.shields.io/github/forks/epubknowledge/css-valid)](https://github.com/epubknowledge/css-valid/network) [![GitHub stars](https://img.shields.io/github/stars/epubknowledge/css-valid)](https://github.com/epubknowledge/css-valid/stargazers) ![GitHub release (latest by date)](https://img.shields.io/github/v/release/epubknowledge/css-valid)

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
