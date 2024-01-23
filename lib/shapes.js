class Shape {
	constructor(text, color) {
		this.text = text;
		this.color = color;
	}
}

class Triangle extends Shape {
	constructor(text, color, shapeColor) {
		super(text, color);
		this.shapeColor = shapeColor;
	}
}

class Circle extends Shape {
	constructor(text, color, shapeColor) {
		super(text, color);
		this.shapeColor = shapeColor;
	}
}

class Square extends Shape {
	constructor(text, color, shapeColor) {
		super(text, color);
		this.shapeColor = shapeColor;
	}
}

module.exports = Shape;
