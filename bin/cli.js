#!/usr/bin/env node

const program = require('commander')

const { name, introName, version, description } = require('../package.json')
const intro = require('../src/intro')
const main = require('../bin/index')

const cli = () => {
  program
    .command('intro')
    .description('Draw app banner')
    .action(() => intro(introName, version, description))

  program
    .version(version)
    .name(name)
    .description(description)
    .option('-i, --input [directory]', 'Directory where CSS files exist', process.cwd())
    .option('-o, --output [directory]', 'Directory where file is to be written to')
    .option('-f, --file [file array]', 'CSS Files to read')
    .option(
      '-e, --exc [file array]',
      'Array of CSS files to exclude in test if reading from directory',
    )
    .action(async () => {
      const { input, output, file, exc } = program._optionValues
      await main(input, output, file, exc, true)
    })

  program.parse(process.argv)
}

cli()
