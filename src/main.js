// @ts-check

// github의 레포지토리 관리 CLI를 만들어본다.
// 이슈, 풀 리퀘스트 등의 라벨관리

/*

node src/main.js list-bugs
github client octokit
*/
const fs = require('fs')
const { program } = require('commander')
//console.log(process.argv)

program.version('0.0.1')
/*
program
    .option('-d, --debug', 'output extra debugging')
    .option('-s, --small', 'small pizza size')
    .option('-p, --pizza-type <type>', 'flavour of pizza')

program.parse(process.argv)

const options = program.opts()
if(options.debug) console.log(options)
console.log('pizza details:')
if(options.small) console.log('- small pizza size')
if(options.pizzaType) console.log(`- 1 ${options.pizzaType}`)
*/

program
    .command('list-bugs')
    .description('List issues with bug label')
    .action(async () => {
        console.log('list bugs')
    })

program
    .command('check-prs')
    .description('Check pull request status')
    .action(async () => {
        console.log('check PRS!')
    })

program.parseAsync()