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
    .option('-i, --input [file, array]', 'CSS Files to be tested')
    .option('-o, --output [directory]', 'Directory where file is to be written to')
    .option('-e, --exc [array]', 'Array of CSS files to exclude in test')
    .action(async () => {
      const { input, output, exc } = program._optionValues
      await main(input, output, exc, true)
    })

  program.parse(process.argv)
}

cli()
