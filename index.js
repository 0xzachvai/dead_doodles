import { readFileSync, renameSync, writeFileSync } from 'fs';

// GENERATE METADATA FILES
// for (let i = 1; i < 3996; i++) {
// 	let f = `./static/tokens/metadata/${i}.json`;
// 	let data = JSON.parse(readFileSync(f));

// 	data.name = `Undead Doodle #${i}`;
// 	data.image = `https://undeaddoodles.com/tokens/images/${i}.jpeg`;

// 	// console.log(data);
// 	writeFileSync(f, JSON.stringify(data));
// }

// for (let i = 3996; i < 4001; i++) {
// 	let data = JSON.parse(readFileSync(`./static/tokens/metadata/1.json`));

// 	data.name = `Undead Doodle #${i}`;
// 	data.image = `https://undeaddoodles.com/tokens/images/${i}.jpeg`;
// 	data.attributes = [];

// 	writeFileSync(`./static/tokens/metadata/${i}.json`, JSON.stringify(data));
// }

// SHUFFLE FILES
// function getRandomInt(max) {
// 	return Math.floor(Math.random() * max) + 1;
// }

// let r1, r2;
// for (let i = 0; i < 500; i++) {
// 	r1 = getRandomInt(4000);
// 	do {
// 		r2 = getRandomInt(500) + 3500;
// 	} while (r2 == r1);

// 	console.log(r1 + ' ' + r2);

// 	const path = './static/tokens';

// 	renameSync(`${path}/images/${r1}.jpeg`, 'tmp.jpeg');
// 	renameSync(`${path}/metadata/${r1}.json`, 'tmp.json');

// 	renameSync(`${path}/images/${r2}.jpeg`, `${path}/images/${r1}.jpeg`);
// 	renameSync(`${path}/metadata/${r2}.json`, `${path}/metadata/${r1}.json`);

// 	renameSync('tmp.jpeg', `${path}/images/${r2}.jpeg`);
// 	renameSync('tmp.json', `${path}/metadata/${r2}.json`);
// }

// UPDATE METADATA
for (let i = 1; i < 4001; i++) {
	let f = `./static/tokens/metadata/${i}.json`;
	let data = JSON.parse(readFileSync(f));

	data.name = `Undead Doodle #${i}`;
	data.image = `https://undeaddoodles.com/tokens/images/${i}.jpeg`;

	writeFileSync(f, JSON.stringify(data));
}

// MANUAL SWAPPING
function swap(id1, id2) {
	let path = './static/tokens';
	renameSync(`${path}/images/${id1}.jpeg`, `tmp${id1}.jpeg`);
	renameSync(`${path}/metadata/${id1}.json`, `tmp${id1}.json`);

	renameSync(`${path}/images/${id2}.jpeg`, `${path}/images/${id1}.jpeg`);
	renameSync(`${path}/metadata/${id2}.json`, `${path}/metadata/${id1}.json`);

	renameSync(`tmp${id1}.jpeg`, `${path}/images/${id1}.jpeg`);
	renameSync(`tmp${id1}.json`, `${path}/metadata/${id2}.json`);
}

swap(1500, 2000);

for (let i = 1; i < 4001; i++) {
	let f = `./static/tokens/metadata/${i}.json`;
	let data = JSON.parse(readFileSync(f));

	// console.log(data.traits)

	if (data.attributes.length == 1) {
		console.log(data.name);
	}

	// data.name = `Undead Doodle #${i}`;
	// data.image = `https://undeaddoodles.com/tokens/images/${i}.jpeg`;

	// console.log(data);
	// writeFileSync(f, JSON.stringify(data));
}

// let names = new Set();

// for (let i = 1; i < 4001; i++) {
// 	let f = `./static/tokens/metadata/${i}.json`;
// 	let data = JSON.parse(readFileSync(f));

// 	if (data.attributes.length == 1) console.log(data.name);
// }

// 	if (data.attributes.length == 4) {
// 		data.attributes[0]['trait_type'] = 'Background';
// 		data.attributes[1]['trait_type'] = 'Body';
// 		data.attributes[2]['trait_type'] = 'Head';
// 		data.attributes[3]['trait_type'] = 'Face';
// 	}

// 	// if (data.attributes[0].value == 'Background 2') {
// 	// 	data.attributes[0].value = 'Purple';
// 	// }

// 	// if (data.attributes[0].value == 'Background 4') {
// 	// 	data.attributes[0].value = 'Maroon';
// 	// }

// 	// if (data.attributes[0].value == 'Background 7') {
// 	// 	data.attributes[0].value = 'Graveyard';
// 	// }

// 	// if (data.attributes[0].value == 'Background 8') {
// 	// 	data.attributes[0].value = 'Gradient';
// 	// }

// 	// if (data.attributes[0].value == 'Background 9') {
// 	// 	data.attributes[0].value = 'Swamp';
// 	// }

// 	// if (data.attributes[0].value == 'Background 10') {
// 	// 	data.attributes[0].value = 'Cave';
// 	// }

// 	// if (data.attributes[0].value == 'Background 11') {
// 	// 	data.attributes[0].value = 'Burning City';
// 	// }

// 	// if (data.attributes[0].value == 'Background 7') {
// 	// 	data.attributes[0].value = 'Graveyard';
// 	// }

// 	// if (data.attributes[0].value == 'Background 12') {
// 	// 	data.attributes[0].value = 'Farmhouse';
// 	// }

// 	// if (data.attributes[0].value == 'Background 13') {
// 	// 	data.attributes[0].value = 'Burning Building';
// 	// }

// 	// if (data.attributes[0].value == 'Background14') {
// 	// 	data.attributes[0].value = 'Elemental Fire';
// 	// }

// 	// if (data.attributes[0].value == 'Background15') {
// 	// 	data.attributes[0].value = 'Purple Fog';
// 	// }

// 	// if (data.attributes[0].value == 'Background16') {
// 	// 	data.attributes[0].value = 'Storm';
// 	// }

// 	// names.add(data.attributes[0]);

// 	// console.log(data);
// 	// writeFileSync(f, JSON.stringify(data));
// }

// console.log(names);
