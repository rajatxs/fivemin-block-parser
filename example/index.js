const { BlockParser } = require('../lib');
const blockdata = require('./blockdata');

const parser = new BlockParser();
const result = parser.parse(blockdata);

console.log(result);
