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
function getRandomInt(max) {
	return Math.floor(Math.random() * max) + 1;
}

let r1, r2;
for (let i = 0; i < 500; i++) {
	r1 = getRandomInt(4000);
	do {
		r2 = getRandomInt(500) + 3500;
	} while (r2 == r1);

	console.log(r1 + ' ' + r2);

	const path = './static/tokens';

	renameSync(`${path}/images/${r1}.jpeg`, 'tmp.jpeg');
	renameSync(`${path}/metadata/${r1}.json`, 'tmp.json');

	renameSync(`${path}/images/${r2}.jpeg`, `${path}/images/${r1}.jpeg`);
	renameSync(`${path}/metadata/${r2}.json`, `${path}/metadata/${r1}.json`);

	renameSync('tmp.jpeg', `${path}/images/${r2}.jpeg`);
	renameSync('tmp.json', `${path}/metadata/${r2}.json`);
}
