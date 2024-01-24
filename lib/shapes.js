//======== Base Class constructor ========//
class Shape {
	constructor(text, color, shapeColor) {
		this.text = text;
		this.color = color;
		this.shapeColor = shapeColor;
	}
}
//========= Class constructor =========//
class Circle extends Shape {
	//get properties from base constructor
	constructor(text, color, shapeColor) {
		super(text, color, shapeColor);
	}
	// Returns svg string with user inputs
	render() {
		return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
		<circle cx="50%" cy="50%" r="80" fill="${this.shapeColor}" />
		<text x="50%" y="50%" font-size="50" dominant-baseline="middle" text-anchor="middle" fill="${this.color}">${this.text}</text>
		</svg>`;
	}
}

class Triangle extends Shape {
	constructor(text, color, shapeColor) {
		super(text, color, shapeColor);
	}
	// Returns svg string with user inputs
	render() {
		return `<svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
		<polygon points="100,5 195,173 5,173" fill="${this.shapeColor}" />
		<text x="50%" y="60%" font-size="50" dominant-baseline="middle" text-anchor="middle" fill="${this.color}">${this.text}</text>
	</svg>`;
	}
}

class Square extends Shape {
	constructor(text, color, shapeColor) {
		super(text, color, shapeColor);
	}
	// Returns svg string with user inputs
	render() {
		return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="200" height="200" fill="${this.shapeColor}"/>
        <text x="40%" y="55%" font-size="50" dominant-baseline="middle" text-anchor="middle" fill="${this.color}">${this.text}</text>
        </svg>`;
	}
}

//== Switch function that get the shape from user input ===//
let getShape = (data) => {
	// Return new Class instances when called by the user input.
	switch (data.shape) {
		case "circle":
			return new Circle(data.text, data.textColor, data.shapeColor);
		case "triangle":
			return new Triangle(data.text, data.textColor, data.shapeColor);
		case "square":
			return new Square(data.text, data.textColor, data.shapeColor);
	}
};
module.exports = { Shape, Circle, Triangle, Square, getShape };
