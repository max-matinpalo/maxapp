// @ts-nocheck

Array.prototype.forEachRev = function (cb) {
	for (let i = this.length - 1; i >= 0; i--) cb(this[i], i, this);
};


Array.prototype.remove = function (e) {
	const index = this.indexOf(e);
	if (index !== -1) this.splice(index, 1);
};


Array.prototype.pushUnique = function (e) {
	if (!this.includes(e)) this.push(e);
};


Array.prototype.sortBy = function (key) {
	return this.sort((a, b) => (a[key] > b[key] ? 1 : -1));
};


Array.prototype.sortByAsc = function (key) {
	return this.sort((a, b) => {
		if (a[key] > b[key]) return 1;
		if (a[key] < b[key]) return -1;
		return 0;
	});
};

Array.prototype.sortByDesc = function (key) {
	return this.sort((a, b) => {
		if (a[key] > b[key]) return -1;
		if (a[key] < b[key]) return 1;
		return 0;
	});
};

Array.prototype.sortBy = Array.prototype.sortByAsc;