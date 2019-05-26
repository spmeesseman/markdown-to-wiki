"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
const fs_1 = require("fs");
const fs = require("fs");
const minimatch = require("minimatch");
const logValueWhiteSpace = 40;
function camelCase(name, indexUpper) {
    if (!name) {
        return name;
    }
    return name
        .replace(/(?:^\w|[A-Za-z]|\b\w)/g, (letter, index) => {
        return index !== indexUpper ? letter.toLowerCase() : letter.toUpperCase();
    })
        .replace(/[\s\-]+/g, '');
}
exports.camelCase = camelCase;
function properCase(name) {
    if (!name) {
        return name;
    }
    return name
        .replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => {
        return index !== 0 ? letter.toLowerCase() : letter.toUpperCase();
    })
        .replace(/[\s\-]+/g, '');
}
exports.properCase = properCase;
function isExcluded(uriPath, exclude) {
    function testForExclusionPattern(path, pattern) {
        return minimatch(path, pattern, { dot: true, nocase: true });
    }
    this.log('', 2);
    this.log('Check exclusion', 2);
    this.logValue('   path', uriPath, 2);
    if (exclude) {
        if (Array.isArray(exclude)) {
            for (let pattern of exclude) {
                this.logValue('   checking pattern', pattern, 3);
                if (testForExclusionPattern(uriPath, pattern)) {
                    this.log('   Excluded!', 2);
                    return true;
                }
            }
        }
        else {
            this.logValue('   checking pattern', exclude, 3);
            if (testForExclusionPattern(uriPath, exclude)) {
                this.log('   Excluded!', 2);
                return true;
            }
        }
    }
    this.log('   Not excluded', 2);
    return false;
}
exports.isExcluded = isExcluded;
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
exports.timeout = timeout;
function pathExists(path) {
    try {
        fs_1.accessSync(path);
    }
    catch (err) {
        return false;
    }
    return true;
}
exports.pathExists = pathExists;
function readFile(file) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            fs.readFile(file, (err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(data.toString());
            });
        });
    });
}
exports.readFile = readFile;
function readFileSync(file) {
    return fs.readFileSync(file).toString();
}
exports.readFileSync = readFileSync;
function removeFromArray(arr, item) {
    let idx = -1;
    let idx2 = -1;
    arr.forEach(each => {
        idx++;
        if (item === each) {
            idx2 = idx;
            return false;
        }
    });
    if (idx2 !== -1 && idx2 < arr.length) {
        arr.splice(idx2, 1);
    }
}
exports.removeFromArray = removeFromArray;
function existsInArray(arr, item) {
    let exists = false;
    if (arr) {
        arr.forEach(each => {
            if (item === each) {
                exists = true;
                return false;
            }
        });
    }
    return exists;
}
exports.existsInArray = existsInArray;
function log(msg, level) {
    return __awaiter(this, void 0, void 0, function* () {
        if (level && level) {
            return;
        }
        console.log(msg);
    });
}
exports.log = log;
function logError(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(chalk_1.default.red(msg));
    });
}
exports.logError = logError;
function logWarning(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(chalk_1.default.yellow(msg));
    });
}
exports.logWarning = logWarning;
function logSuccess(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(chalk_1.default.green(msg));
    });
}
exports.logSuccess = logSuccess;
function logValue(msg, value, level) {
    return __awaiter(this, void 0, void 0, function* () {
        var logMsg = msg;
        for (var i = msg.length; i < logValueWhiteSpace; i++) {
            logMsg += ' ';
        }
        if (value || value === 0 || value === '') {
            logMsg += ': ';
            logMsg += value.toString();
        }
        else if (value === undefined) {
            logMsg += ': undefined';
        }
        else if (value === null) {
            logMsg += ': null';
        }
    });
}
exports.logValue = logValue;
