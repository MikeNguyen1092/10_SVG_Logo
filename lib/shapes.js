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


let getShape = (data) => {

    switch(data.shape){
        case 'circle': 
        return new Circle(data.text, data.textColor, data.shapeColor);
        case 'triangle': 
        return new Triangle(data.text, data.textColor, data.shapeColor);
        case 'square': 
        return new Square(data.text, data.textColor, data.shapeColor);
    }
    
}
module.exports = {Shape, Circle, Triangle, Square, getShape}
