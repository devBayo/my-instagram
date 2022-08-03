module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{json,ico,html,png,txt,md,js,svg,jpeg,jsx,css}'
	],
	swDest: './public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};