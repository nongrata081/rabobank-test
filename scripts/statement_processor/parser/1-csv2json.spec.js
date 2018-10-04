const rewire = require("rewire");
const chai = require('chai');
chai.use(require('chai-fs'));
const series = require('async').series;
const paths = require('../paths');
const parse = rewire('./utils/parse').__get__('parseFile');

describe('Parse CSV file', () => {
  step('should parse .CSV to .json', () => {
    series([
      function(){ parse(paths.srcCsvFile, paths.distCsvPath); },
      function(){ chai.expect(paths.distCsvPath).to.be.a.file().with.json; }
    ]);
  });
});
