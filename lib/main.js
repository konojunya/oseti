const path = require("path");
const fs = require("fs");

module.exports = {
  parse(src) {
    let obj = {};
    let matchKey = "";
    src.toString().split("\n").forEach(function(line, index) {
      if(line.match(/.+\:$/)) {
        const k = line.replace(":", "").trim();
        matchKey = k;
        obj[k] = {};
      }
      if(line.match(/\s.+/)) {
        const v = line.replace(/.+:\s/, "");
        const k = line.replace(v, "").trim().replace(":", "");
        obj[matchKey][k] = v;
      }
    })
    return obj;
  },
  isClient() {
    return typeof window !== "undefined";
  },
  get(key) {
    const env = this.isClient() ? window.OSETI_ENV : process.env.OSETI_ENV;
    const parsed = JSON.parse(env);
    const NODE_ENV = this.isClient() ? window.NODE_ENV : process.env.NODE_ENV;
    return NODE_ENV ? parsed[NODE_ENV][key] || "" : "";
  },
  load(filename = "config.yml") {
    const configFilePath = path.resolve(process.cwd(), filename)
    try {
      const parsed = this.parse(fs.readFileSync(configFilePath, "utf-8"))
      const str = JSON.stringify(parsed);
      process.env.OSETI_ENV = str;
    } catch(e) {
      console.error(e);
    }
  }
}