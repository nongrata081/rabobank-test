const path = require('path');
const parse = require('./utils/parse');
const srcCsvFile = path.join(__dirname, '../records/src/records.csv');
const distCsvPath = path.join(
	__dirname,
	`../records/dist/records-from-csv.json`
);

parse.csv(srcCsvFile, distCsvPath);
