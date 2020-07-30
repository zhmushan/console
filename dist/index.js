import { relative } from "path";
import { format } from "util";
import * as callsites from "callsites";
const cwd = process.cwd();
function log(message, ...optionalParams) {
    const site = callsites()[1];
    const fileInfo = `${relative(cwd, site.getFileName())} ${site.getLineNumber()}:${site.getColumnNumber()}`;
    const out = format(message, ...optionalParams);
    console.log(`${out}\n${fileInfo.padStart(process.stdout.columns)}`);
}
export default { ...console, log };
//# sourceMappingURL=index.js.map