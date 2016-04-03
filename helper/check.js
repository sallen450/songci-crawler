const songci = require('../data/songci.json');
const fs = require('fs');

const checkedSognci = [];
const unCheckedSognci = [];

/**
 * 检查是否有不标准的字符
 */
function checkContent(text) {
	if (/[A-Za-z0-9□\\＿囗/]/.test(text) === false) {
		return true;
	}

	return false;
}

/**
 * 循环剔除脏数据
 */
songci.forEach(function (item) {
	if (checkContent(item.content) && checkContent(item.title) && checkContent(item.author)) {
		checkedSognci.push(item);
	} else {
		unCheckedSognci.push(item);
	}
});

/**
 * 将新的数据写入 checked.json
 */
const checkedFileFullPath = '../data/checked.json';
const unCheckedFileFullPath = '../data/unchecked.json';
fs.writeFileSync(checkedFileFullPath, JSON.stringify(checkedSognci), 'utf8', (err) => {
	if (err) {
		console.error(err);
	}
});
fs.writeFileSync(unCheckedFileFullPath, JSON.stringify(unCheckedSognci), 'utf8', (err) => {
	if (err) {
		console.error(err);
	}
});
