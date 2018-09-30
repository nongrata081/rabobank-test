const path = require('path');

const getFileExt = file => {
	return path.extname(file);
};

const isFileExtValid = fileExt => {
	if (fileExt.match(/^(.xml|.csv)$/)) {
		return true;
	} else {
		return false;
	}
};

const isFileExtXML = fileExt => {
	return fileExt === '.xml';
};

const isFileExtCSV = fileExt => {
	return fileExt === '.csv';
};

module.exports = {
	getFileExt: getFileExt,
	isFileExtValid: isFileExtValid,
	isFileExtXML: isFileExtXML,
	isFileExtCSV: isFileExtCSV
};
