const path = require('path');
const mergeRecords = require('./utils/merge');
const distCsvFile = path.join(__dirname, '../records/dist/records-from-csv.json');
const distXmlFile = path.join(__dirname, '../records/dist/records-from-xml.json');

let recordsFiles = [distCsvFile, distXmlFile];

mergeRecords.files(recordsFiles);
