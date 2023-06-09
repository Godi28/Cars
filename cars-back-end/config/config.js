// requires
const _ = require("lodash");

// module variables
const config = require("./package.json");
const defaultConfig = config.development;
const environment = process.env.NODE_ENV || "development";
const environmentConfig = config[environment];
const finalConfig = _.merge(defaultConfig, environmentConfig);

global.gConfig = finalConfig;
