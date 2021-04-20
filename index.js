#!/usr/bin/env node
const fs = require('fs');
const filePath = process.argv[2];
const base64data  = fs.readFileSync(filePath, 'utf8');
const buff = Buffer.from(base64data, 'base64');
fs.writeFileSync(filePath.slice(0, -4), buff);
console.log("done");
