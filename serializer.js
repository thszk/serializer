#! /usr/bin/env node

const fs = require('fs')
const fileToParse = process.argv[2]
let input = null
let output = null

if (!fileToParse) {
	console.log('Please, provide the path to input file that must be serialized!')
	console.log('eg.: ./serializer <file-path>')
	process.exit(1)
}

try {
	input = fs.readFileSync(fileToParse, 'utf-8')
} catch (err) {
	console.log(err)
	process.exit(1)
}

output = input
	.replace(/\r\n|\r|\n/g, '')
	.replace(/\s\s/g, '')

console.log(output)
