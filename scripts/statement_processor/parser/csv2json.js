const parse = require('./utils/parse');
const paths = require('../paths');

parse.csv(paths.srcCsvFile, paths.distCsvPath);
