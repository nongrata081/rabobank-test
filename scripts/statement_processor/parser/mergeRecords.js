const mergeRecords = require('./utils/merge');
const paths = require('../paths');

mergeRecords.files([paths.distXmlPath, paths.distCsvPath]);
