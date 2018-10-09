module.exports = {
  get(key) {
    const env = window.OSETI_ENV;
    const parsed = JSON.parse(env);
    return parsed[window.NODE_ENV][key] || "";
  }
}