const rewire = require("rewire");
const chai = require('chai');
chai.use(require('chai-fs'));
const series = require('async').series;
const mergeRecords = rewire('./utils/merge').__get__('mergeFiles');
const paths = require('../paths');
const distXmlFile = paths.distXmlFile;
const distCsvFile = paths.distCsvFile;

describe('Merge JSON files', () => {
  step('should merge given .json files to single one', () => {
    series([
      function(){ mergeRecords([paths.distXmlPath, paths.distCsvPath]); },
      function(){ chai.expect(paths.distMergedRecords).to.be.a.file().with.json; }
    ]);
  });
});
