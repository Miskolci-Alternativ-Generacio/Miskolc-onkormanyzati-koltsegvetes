const xl = require('excel4node');

const BUDGET_FILE = "input/budget.xlsx";
const OUTPUT_FILE = "input/texts-template.xlsx";

const wb = new xl.Workbook();

const blue = '#00396C';
const yellow = '#FFE7A4';

const headerStyle = wb.createStyle({
	fill: {
		bgColor: blue,
		fgColor: blue,
		patternType: 'solid',
		type: 'pattern'
	},
	font: {
		bold: true,
		color: '#FFFFFF'
	}
});

const inputStyle = wb.createStyle({
	fill: {
		bgColor: yellow,
		fgColor: yellow,
		patternType: 'solid',
		type: 'pattern'
	},
	font: {
		color: blue
	}
});

const descStyle = wb.createStyle({
	font: {
		color: '#999999',
		italics: true
	}
});


const textsSheet = wb.addWorksheet('Szövegek');

const rows = [
	[
		'Kulcs', 'Elnevezés', 'Érték',
		'Magyarázat'
	],
	[
		'seo.siteName', 'Honlap elnevezése', 'Mintaváros',
		'Böngészőablak címsora: "Lap elnevezése - Honlap elnevezése", teljes hossz max. 60 karakter.'
	],
	[
		'seo.pageTitle', 'Lap elnevezése', 'Költségvetés',
		'Böngészőablak címsora: "Lap elnevezése - Honlap elnevezése", teljes hossz max. 60 karakter.'
	],
	[
		'seo.ogTitle', 'Lap elnevezése (social)', 'MINTAVÁROS KÖLTSÉGVETÉSE',
		'Facebook/Twitter kártya címsora.'
	],
	[
		'seo.description', 'Honlap leírása', 'Mintaváros költségvetése könnyen befogadható és értelmezhető módon, ahol néhány kattintással mindenki láthatja, miből, mennyit és mire költünk.',
		'Google találatban, Facebook/Twitter kártyában megjelenő leírás. Max. 160 karakter.'
	],
	[
		'social.text', 'Poszt szövege/tárgya', 'Mintaváros költségvetése',
		'Twitter bejegyzés szövege, LinkedIn poszt vagy email tárgya.'
	],
	[
		'navBar.welcome', 'Köszöntő link szövege', 'Köszöntő',
		'A felső navigációs sávban megjelenő szöveg.'
	],
	[
		'navBar.inex', 'Költségvetés link szövege', 'Költségvetés',
		'A felső navigációs sávban megjelenő szöveg.'
	],
	[
		'navBar.milestones', 'Fejlesztések link szövege', 'Fejlesztések',
		'A felső navigációs sávban megjelenő szöveg.'
	],
	[
		'navBar.moreInfo', 'További információ link szövege', 'A projektről',
		'A felső navigációs sávban megjelenő szöveg.'
	]
];

rows.forEach((r, i) => {
	r.forEach((c, j) => {
		const cell = textsSheet.cell(i + 1, j + 1).string(c);
		if (i === 0) {
			cell.style(headerStyle);
		} else if (j === 2) {
			cell.style(inputStyle);
		} else if (j === 0 || j === 3) {
			cell.style(descStyle);
		}
	});
});
textsSheet.column(2).setWidth(25);
textsSheet.column(3).setWidth(40);
textsSheet.column(4).setWidth(80);
textsSheet.row(1).freeze();

wb.write(OUTPUT_FILE);