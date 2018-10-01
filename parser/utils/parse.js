const fs = require('fs');
const csv = require('csvtojson');
const parser = require('xml2json');
const validate = require('./validate');

const normalizeData = data => {
  let mapObj = {
    Reference: 'reference',
    'Account Number': 'accountNumber',
    Description: 'description',
    'Start Balance': 'startBalance',
    Mutation: 'mutation',
    'End Balance': 'endBalance'
  };

  const regex = /Reference|Account Number|Description|Start Balance|Mutation|End Balance/g;

  return (data = data.replace(regex, function(matched) {
    return mapObj[matched];
  }));
};

const parseXML = (data, distFile) => {
	let jsonRecords = JSON.stringify(
		JSON.parse(parser.toJson(data)).records.record,
		null,
		2
	);
	fs.writeFile(distFile, jsonRecords, err => {
		if (!err) {
			console.log(`XML records were written to ${distFile}`);
		} else {
			console.log(err);
		}
	});
};

const parseCSV = (srcFile, distFile) => {
	csv()
		.fromFile(srcFile)
		.then(jsonObj => {
			let jsonRecords = normalizeData(JSON.stringify(jsonObj, null, 2));
			fs.writeFile(distFile, jsonRecords, err => {
				if (!err) {
					console.log(`CSV records were written to ${distFile}`);
				} else {
					console.log(err);
				}
			});
		});
};

const parseFile = (srcFile, distFile) => {
	fs.readFile(srcFile, { encoding: 'utf-8' }, (err, data) => {
		if (!err) {
			const fileExt = validate.getFileExt(srcFile);
			const isFileValid = validate.isFileExtValid(fileExt);
			const isFileExtXML = validate.isFileExtXML(fileExt);
			const isFileExtCSV = validate.isFileExtCSV(fileExt);

			if (isFileValid) {
				if (isFileExtXML) {
					parseXML(data, distFile);
				} else if (isFileExtCSV) {
					parseCSV(srcFile, distFile);
				}
			} else {
				console.log('Provided file is not valid');
			}
		} else {
			console.log(err);
		}
	});
};

module.exports = {
	file: parseFile,
	csv: parseCSV,
  merge: mergeFiles
};
