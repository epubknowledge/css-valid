# CLI Documentation

If the CLI is used the results will be written to an XML file specified by what exists in `output` if there is an error or warning.

If no error or warning is found then the terminal will return:

```bash
File: filename.css Errors: 0 Warnings: 0

Completed
```

## Commands

CLI can be used by calling either:

```bash
cssvalidcli
```

or

```bash
cvcli
```

## Help

If you forget or want to know the commands:

```bash
cvcli --help
```

## Examples

Basic usage:

```bash
cvcli
```

## Input

Input accepts a directory parameter to read. If no file is found in the terminal scope a `Completed` will be echoed in the terminal.
