const rewire = require('rewire');
const chai = require('chai');
chai.use(require('chai-fs'));
const series = require('async').series;
const validate = rewire('./utils/validate').__get__(
	'validateRecords'
);
const paths = require('../paths');

describe('Records validator', () => {
	step(
		'should validate records and generate invalid-records.json',
		() => {
			series([
				function() {
					validate(paths.recordsFile);
				},
				function() {
					chai
						.expect(paths.distInvalidRecords)
						.to.be.a.file().with.json;
				}
			]);
		}
	);
});
