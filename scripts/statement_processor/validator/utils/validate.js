const fs = require('fs');
const path = require('path');
const distInvalidRecords = path.join(
	__dirname,
	'../../../../records/dist/invalid-records.json'
);

const arrContainsObjNot = (arr, obj) => {
	return arr.indexOf(obj) === -1;
};

const validateReference = records => {
	let invalidRecords = [];

	records.forEach(r => {
		records.forEach(i => {
			let currentObj = r;
			let verifiedObj = i;

			if (currentObj !== verifiedObj) {
				if (
					currentObj.reference === verifiedObj.reference
				) {
					if (
						arrContainsObjNot(invalidRecords, currentObj)
					) {
						invalidRecords.push(currentObj);
					} else if (
						arrContainsObjNot(invalidRecords, verifiedObj)
					) {
						invalidRecords.push(verifiedObj);
					}
				}
			}
		});
	});

	if (invalidRecords.length > 0) {
		return invalidRecords;
	}
	return 'There are no invalid records by reference. All references are unique';
};

const validateEndBalance = records => {
	let invalidRecords = [];
	records.forEach(i => {
		if (i.endBalance < 0) {
			invalidRecords.push(i);
		}
	});

	if (invalidRecords.length > 0) {
		return invalidRecords;
	}
	return 'There are no invalid records by end balance. All records have positive end balance';
};

const generateReport = (
	distFilePath,
	invalidRecords,
	message
) => {
	fs.writeFile(
		distFilePath,
		JSON.stringify(invalidRecords, null, 2),
		err => {
			if (!err) {
				console.log(message + ` ${distFilePath}`);
			} else {
				console.log(err);
			}
		}
	);
};

const validateRecords = file => {
	fs.readFile(file, { encoding: 'utf-8' }, (err, data) => {
		if (!err) {
			let records = JSON.parse(data);
			let invalidReferenceRecords = validateReference(
				records
			);
			let invalidEndBalanceRecords = validateEndBalance(
				records
			);

			let invalidRecords = {
				invalidRecords: {
					byReference: invalidReferenceRecords,
					byEndBalance: invalidEndBalanceRecords
				}
			};

			generateReport(
				distInvalidRecords,
				invalidRecords,
				'Invalid records were written to'
			);
		} else {
			console.log(err);
		}
	});
};

module.exports = {
	records: validateRecords
};
