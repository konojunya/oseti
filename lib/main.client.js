module.exports = {
  get(key) {
    const env = window.OSETI_ENV;
    const parsed = JSON.parse(JSON.stringify(env));
    return parsed[window.NODE_ENV][key] || "";
  }
}