const parse = require('./utils/parse');
const paths = require('../paths');

parse.file(paths.srcXmlFile, paths.distXmlPath);
