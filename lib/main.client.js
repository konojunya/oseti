module.exports = {
  get(key) {
    const env = window.OSETI_ENV;
    const parsed = JSON.parse(env);
    const NODE_ENV = window.NODE_ENV;
    return NODE_ENV ? parsed[NODE_ENV][key] || "" : "";
  }
}