const fs = require('fs');
const paths = require('../../paths');

const mergeFiles = (arr) => {
  let mergedArr = [];
  arr.forEach((i) => {
    let data = fs.readFileSync(i, 'utf8');
    mergedArr = [].concat.apply(mergedArr, JSON.parse(data));
  });
  fs.writeFile(paths.distMergedRecords, JSON.stringify(mergedArr, null, 2), err => {
    if (!err) {
      console.log(`Merged records were written to ${paths.distMergedRecords}`);
    } else {
      console.log(err);
    }
  });
};

module.exports = {
  files: mergeFiles
};
