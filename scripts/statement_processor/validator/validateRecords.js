const path = require('path');
const validate = require('./utils/validate');
const recordsFile = path.join(
	__dirname,
	'../../../records/dist/merged-records.json'
);

validate.records(recordsFile);
