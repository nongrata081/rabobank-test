const fs = require('fs');
const path = require('path');
const distMergedRecords = path.join(__dirname, '../../records/dist/merged-records.json');

const mergeFiles = (arr) => {
  let mergedArr = [];
  arr.forEach((i) => {
    let data = fs.readFileSync(i, 'utf8');
    mergedArr = [].concat.apply(mergedArr, JSON.parse(data));
  });
  fs.writeFile(distMergedRecords, JSON.stringify(mergedArr, null, 2), err => {
    if (!err) {
      console.log(`Merged records were written to ${distMergedRecords}`);
    } else {
      console.log(err);
    }
  });
};

module.exports = {
  files: mergeFiles
};
