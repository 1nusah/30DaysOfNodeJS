const name = () => {
	console.log('name');
};

module.exports = {
	value: 1,
	userIds: [1, 2, 3],
	action() {
		console.log('action function returned');
	},
};
