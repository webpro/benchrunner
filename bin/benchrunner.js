#!/usr/bin/env node

var path = require('path'),
    child_process = require('child_process'),
    spawn = child_process.spawn,
    benchrunner = path.resolve(__dirname, '../benchrunner.js'),
    args = [].slice.call(process.argv, 2);

var phantom = spawn('phantomjs', [benchrunner].concat(args));

phantom.stdout.pipe(process.stdout);
phantom.stderr.pipe(process.stderr);
