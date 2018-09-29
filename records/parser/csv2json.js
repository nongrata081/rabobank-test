const fs = require('fs');
const path = require('path');
const csv = require('csvtojson');
const csvRecords = path.join(__dirname, '../data/src/records.csv');
const jsonRecordsFile = 'records-from-csv.json';
const jsonRecordsFromXML = path.join(
	__dirname,
	`../data/dist/${jsonRecordsFile}`
);

csv()
	.fromFile(csvRecords)
	.then(jsonObj => {
		console.log(jsonObj);
		fs.writeFile(jsonRecordsFromXML, JSON.stringify(jsonObj), err => {
			if (!err) {
				console.log(
					`XML records were written to records/data/dist/${jsonRecordsFile}`
				);
			} else {
				console.log(err);
			}
		});
	});
