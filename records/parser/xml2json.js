let parser = require('xml2json');
let fs = require('fs');
let path = require('path');
let xmlRecords = path.join(__dirname, '../data/records.xml');
let jsonRecordsFromXML = path.join(__dirname, '../data/recordsFromXml.json');

fs.readFile(xmlRecords, { encoding: 'utf-8' }, (err, data) => {
	if (!err) {
		let jsonRecords = parser.toJson(data);
		console.log(jsonRecords);
		fs.writeFile(jsonRecordsFromXML, jsonRecords, err => {
			if (!err) {
				console.log('XML records were written to jsonRecordsFromXml.json');
			} else {
				console.log(err);
			}
		});
	} else {
		console.log(err);
	}
});
