module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{json,ico,html,png,txt,md,js,jpeg,svg,jsx,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};