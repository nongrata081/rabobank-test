const rewire = require('rewire');
const chai = require('chai');
chai.use(require('chai-fs'));
const series = require('async').series;
const paths = require('../paths');
const parse = rewire('./utils/parse').__get__('parseFile');

describe('Parse XML file', () => {
  step('should parse .XML to .json', () => {
    series([
      function(){ parse(paths.srcXmlFile, paths.distXmlPath); },
      function(){ chai.expect(paths.distXmlPath).to.be.a.file().with.json; }
    ]);
  });
});
