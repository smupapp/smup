const externals = {};
const DATA = {};


externals.set = (key, value) => {
  DATA[key] = value;
};


externals.get = (key, defaultValue) => {
  return DATA[key] || defaultValue;
};


module.exports = externals;