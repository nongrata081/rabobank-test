const path = require('path');
const parse = require('./utils/parse');
const srcXmlFile = path.join(__dirname, '../../../records/src/records.xml');
const distXmlPath = path.join(
	__dirname,
	`../../../records/dist/records-from-xml.json`
);

parse.file(srcXmlFile, distXmlPath);
