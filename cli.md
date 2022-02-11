# CLI Documentation

First install the package:

```
cd css-valid && npm i && npm link
```

If the CLI is used the results will be written to an XML file specified by what exists in `output` if there is an error or warning. If no error or warning are found then the terminal will return:

```bash
File: filename.css Errors: 0 Warnings: 0

Completed
```

## Commands

The CLI can be used by calling either:

```bash
cssvalidcli
```

or

```bash
cvcli
```

Quick example run on a title's CSS directory with an exclusion:

```
vcli -i '/Users/codingChewie/title/OEBPS/css' -e epub3.css
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

### Input

Input accepts a directory parameter to read. If no file is found in the terminal scope a `Completed` will be echoed in the terminal.

```bash
cvcli -i css
```

If the scope is invalid or directory doesn't exist the terminal will echo:

```bash
Error: Not a valid directory
```

### Output

Output is if the XML files should be written to a different location.

```bash
cvcli -o wherever
```

There are two shortcuts:

- `desktop`: outputs XML files to the desktop directory
- `docs` or `documents`: outputs XML files to the Documents directory

```bash
cvcli -o desktop
```

### File

If wanting to only pass in a file instead of reading an entire directory use `f` flag:

```bash
cvcli -i test -f idGeneratedStyles.css
```

Command reads into a directory named `test` for a file named `idGeneratedStyles.css`.

### Exclusion

If a workflow CSS is to be included and a test isn't needed then use `-e` flag:

```bash
cvcli -i test -e epub3.css
```

Command reads into a directory named `test` but excludes a file named `epub3.css`.

### CLI

Since W3C's jar by default outputs to an XML file the CLI will write and errors or warnings to an XML file by the filename, example.

- CSS file to test was named: _idGeneratedStyles.css_
- If any errors or warnings are found the XML file will be named: _idGeneratedStyles.css.xml_
