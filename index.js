const getShape = require(`./lib/shapes`);
const inquirer = require("inquirer");
const fs = require("fs");

//=== Initial function ===//
let init = async () => {
	try {
		// use inquirer to get the key-value pairs
		const responses = await inquirer.prompt([
			{
				type: `input`,
				message: `Please inter up to 3 letters`,
				name: `letters`,
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
                choices: [`circle`, `square`, `triangle`]
			},
			{
				type: `input`,
				message: `Please choose the shape color (color keyword OR a hexadecimal number).`,
				name: `shapeColor`,
			},
		]);
		// run this function when the responses are done.
		await writeToFile(responses);
	} catch (error) {
		console.log(error, `Error`);
	}
};
// END

//=== Generate file based on user inputs ===//
function writeToFile(responses) {

	fs.writeFile(`./examples/logo.svg`, getShape(responses), (err) => err ? console.error(`Error ` + err) : console.log(`logo.svg has been successfully created!`));
}

// Function call to initialize app
init();