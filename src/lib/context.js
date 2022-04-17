const DATA = {};


externals.set = (key, value) => {
  DATA[key] = value;
};


externals.get = (key, value) => {
  return DATA[key];
};


module.exports = externals;