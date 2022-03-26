module.exports = {
	mode: 'jit',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			width: {
				100: 'calc((100% - 1300px) / 2 + 1300px)',
				102: 'calc((100% - 1350px) / 2 + 1350px)',
				103: ' calc((100% - 746px) / 2 + 720px)',
				104: 'calc((100% - 566px) / 2 + 514px)',
				105: 'calc((100% - 1164px) / 2 + 1140px)',
				106: 'calc(100% - 30px)',
				107: 'calc((100% - 986px) / 2 + 960px)',
			},
			padding: {
				19: 'calc(1.5rem / 2)',
			},
			margin: {
				19: 'calc(1.5rem / - 2)',
			},
			colors: {
				primary: {
					DEFAULT: '#ff5041',
					bluegray: 'rgb(71, 85, 105)',
					priy: '#121315',
					blue: '#0d6efd',
					lightblue: '#415674',
					indigo: '#6610f2',
					purple: '#6f42c1',
					pink: ' #d63384',
					red: '#dc3545',
					orange: '#fd7e14',
					yellow: '#ffc107',
					green: '#198754',
					teal: '#20c997',
					cyan: '#0dcaf0',
					white: '#fff',
					gray: '#6c757d',
					graydark: '#343a40',
					primary: '#0d6efd',
					secondary: '#6c757d',
					success: '#198754',
					info: '#0dcaf0',
					warning: '#ffc107',
					danger: '#dc3545',
					light: '#f8f9fa',
					dark: '#212529',
					bodybg: '#f6f8fa',
					clrtheme1: '#ff5041',
					100: '#fff3f2',
					200: '#f6f8fa'
				},
				teal: {
					100: '#ccfbf1',
				},
				rose: {
					100: '#ffe4e6',
				},
			},
			flex: {
				1: '0 0 100%',
				2: '1 1 100%',
				flow: 'row wrap',
				3: '1 1 calc(33.3333% - 10px)',
				4: '0 0 auto',
				5: '1 1 calc(50% - 10px)',
				0: '0 0 25%',
				6: '0 0 50%',
			},
			maxWidth: {
				2: '1326px',
			},
			screens: {
				sm: '576px',
				md: '768px',
				lg: '992px',
				xl: '1200px',
				'2xl': '1400px',
			},
			translate: {
				'50%': '-50%',
				100: '0,  -50%',
			},
		},
	},
	plugins: [],
};
