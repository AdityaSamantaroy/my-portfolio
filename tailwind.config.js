const colors = require("tailwindcss/colors");

module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			// Build your palette here
			transparent: "transparent",
			current: "currentColor",
			blueGray: colors.blueGray,
			rose: colors.rose,
			teal: colors.teal,
			emerald: colors.emerald,
			amber: colors.amber,
			fuchsia: colors.fuchsia,
			white: colors.white,
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
