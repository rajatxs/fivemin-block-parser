const { BlockParser } = require('../lib');
const blockdata = require('./blockdata');

const parser = new BlockParser();

// @ts-ignore
const result = parser.parse(blockdata);

console.log(result);
