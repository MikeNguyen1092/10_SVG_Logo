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
    render () {
        return `Triangle`
    }
}

class Square extends Shape {
	constructor(text, color, shapeColor) {
		super(text, color);
		this.shapeColor = shapeColor;
	}
    render () {
        return `Square`
    }
}
class Circle extends Shape {
	constructor(text, color, shapeColor) {
		super(text, color);
		this.shapeColor = shapeColor;
	}
    render () {
        return `Circle`
    }
}

// const newShape = new Square("MTN", "blue", `red`);
// let getShape = (data) => {
//     return `${data}`;
// }
module.exports = getShape;
