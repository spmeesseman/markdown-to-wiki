#!/usr/bin/env node
/* eslint-disable global-require */
/* eslint-disable no-use-before-define */
const marked = require('marked');
const renderer = require('./renderer');
const util = require("./util");
const fs = require("fs");
const gradient = require("gradient-string");
const chalk = require("chalk");

exports = module.exports = {
	convertString: function(input) 
	{
		let ret = marked(input, { renderer: renderer });
		if (ret[0] === '\n') {
			ret = ret.substring(1);
		}
		return ret;
	}
};

//
// Display color banner
//
let version = require('../package.json').version;
displayIntro();

//
// Build command line argument parser
//
var ArgumentParser = require('argparse').ArgumentParser;
var parser = new ArgumentParser({
    addHelp: false,
    description: '',
    prog: 'app-publisher'
});
parser.addArgument('--input', {
    dest: 'input',
    help: 'Convert the specified markdown text to wiki markdown'
});
parser.addArgument('--file', {
    dest: 'file',
    help: 'Convert the specified markdown file to wiki markdown'
});
parser.addArgument(['-h', '--help'], {
    help: 'Display help and exit.',
    action: 'storeTrue'
});
parser.addArgument('--verbose', {
    action: 'storeTrue',
    help: 'Increase logging verbosity.'
});
parser.addArgument('--version', {
    help: 'Display version and exit.',
    action: 'storeTrue'
});

//
// Parse command line arguments
//
let args = parser.parseArgs();

//
// If user specified '-h' or --help', then just display help and exit
//
if (args.help)
{
    util.log(gradient('cyan', 'pink').multiline(`----------------------------------------------------------------------------
 Markdown-to-wiki Help
----------------------------------------------------------------------------
`, {interpolation: 'hsv'}));
    parser.printHelp();
    return 0;
}

//
// If user specified '--version', then just display version and exit
//
if (args.version)
{
    util.log(chalk.bold(gradient('cyan', 'pink').multiline(`----------------------------------------------------------------------------
Markdown-to-wiki Version
----------------------------------------------------------------------------
`, {interpolation: 'hsv'})));
    util.log(version);
    return 0;
}

if (args.file)
{
	if (fs.existsSync(args.file)) {
		args.input = fs.readFileSync(args.file).toString();
	}
	else {
		util.logError("Specified file not found!! Exiting");
		return 100;
	}
}

let ret = marked(args.input, { renderer: renderer });
if (ret[0] === '\n') {
	ret = ret.substring(1);
}

console.log(ret);
return 0;

function displayIntro() 
{
    util.log(gradient('cyan', 'pink').multiline(`----------------------------------------------------------------------------
 Markdown-to-Wiki
 Version: ${version}
----------------------------------------------------------------------------
`, {interpolation: 'hsv'}));
}

function displayArgHelp(arg) 
{
    util.log("projectname       Name of the project.  This must macth throughout the build");
    util.log("                  files and the SVN project name");
    util.log("");
    util.log("deployscript      ");
    util.log("");
    util.log("historyfile      The location of this history file, can be a relative or full path.");
    util.log("");
    util.log("historylinelen   Defaults to 80");
    util.log("");
}
