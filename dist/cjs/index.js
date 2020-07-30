"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const util_1 = require("util");
const callsites = require("callsites");
const cwd = process.cwd();
function log(message, ...optionalParams) {
    const site = callsites()[1];
    const fileInfo = `${path_1.relative(cwd, site.getFileName())} ${site.getLineNumber()}:${site.getColumnNumber()}`;
    const out = util_1.format(message, ...optionalParams);
    console.log(`${out}\n${fileInfo.padStart(process.stdout.columns)}`);
}
exports.default = Object.assign(Object.assign({}, console), { log });
//# sourceMappingURL=index.js.map