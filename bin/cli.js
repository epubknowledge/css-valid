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
    .option('-i, --input [file]', 'CSS File', null)
    .option('-o, --output [directory]', 'Directory where file is to be written to', null)
    .action(async () => {
      const { input, output } = program._optionValues
      await main(input.trim(), output.trim(), true)
    })

  program.parse(process.argv)
}

cli()
