const path = require('path');
const srcXmlFile = path.join(
	__dirname,
	'../../records/src/records.xml'
);
const distXmlPath = path.join(
	__dirname,
	`../../records/dist/records-from-xml.json`
);
const srcCsvFile = path.join(
	__dirname,
	'../../records/src/records.csv'
);
const distCsvPath = path.join(
	__dirname,
	`../../records/dist/records-from-csv.json`
);
const distMergedRecords = path.join(
	__dirname,
	'../../records/dist/merged-records.json'
);
const recordsFile = path.join(
	__dirname,
	'../../records/dist/merged-records.json'
);
const distInvalidRecords = path.join(
	__dirname,
	'../../records/dist/invalid-records.json'
);

module.exports = {
	srcXmlFile: srcXmlFile,
	distXmlPath: distXmlPath,
	srcCsvFile: srcCsvFile,
	distCsvPath: distCsvPath,
	distMergedRecords: distMergedRecords,
	recordsFile: recordsFile,
	distInvalidRecords: distInvalidRecords
};
