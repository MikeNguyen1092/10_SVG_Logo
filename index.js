const {getShape} = require("./lib/shapes");
const inquirer = require("inquirer");
const fs = require("fs");
const regex = /^#(?:[0-9a-fA-F]{3}){1,2}$|^(red|green|blue|white|black|orange|yellow|brown|pink|purple|grey)$/;


//=== Initial function ===//
let init = async () => {
	try {
		// use inquirer to get the key-value pairs
		const responses = await inquirer.prompt([
			{
				type: `input`,
				message: `Please inter up to 3 letters`,
				name: `text`,
			},
			{
				type: `input`,
				message: `Please choose a text color (color keyword OR a hexadecimal number).`,
				name: `textColor`,
			},
			{
				type: `list`,
				message: `Please choose a shape`,
				name: `shape`,
                choices: [`circle`, `triangle`, `square`]
			},
			{
				type: `input`,
				message: `Please choose the shape color (color keyword OR a hexadecimal number).`,
				name: `shapeColor`,
			},
		]);
		// run this function when the responses are done.
		if (responses.text.length > 3) {
			console.log(`Please only enter up to 3 letters`);
		} else if (!regex.test(responses.textColor) || !regex.test(responses.shapeColor)) {
			console.log(`Please enter a color keyword OR a hexadecimal number`);
		} else {
			await writeToFile(responses);
		}
	} catch (error) {
		console.log(error, `Error`);
	}
};
// END

//=== Generate file based on user inputs ===//
function writeToFile(responses) {

	fs.writeFile(`./examples/logo.svg`, getShape(responses).render(), (err) => err ? console.error(`Error ` + err) : console.log(`Generated logo.svg`));
}

// Function call to initialize app
init();