const parser = require('xml2json');
const fs = require('fs');
const path = require('path');
const xmlRecords = path.join(__dirname, '../data/src/records.xml');
const jsonRecordsFile = 'records-from-xml.json';
const jsonRecordsFromXML = path.join(
	__dirname,
	`../data/dist/${jsonRecordsFile}`
);

fs.readFile(xmlRecords, { encoding: 'utf-8' }, (err, data) => {
	if (!err) {
		let jsonRecords = parser.toJson(data);
		console.log(jsonRecords);
		fs.writeFile(jsonRecordsFromXML, jsonRecords, err => {
			if (!err) {
				console.log(
					`XML records were written to records/data/dist/${jsonRecordsFile}`
				);
			} else {
				console.log(err);
			}
		});
	} else {
		console.log(err);
	}
});
