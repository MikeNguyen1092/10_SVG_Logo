const { Circle, Triangle, Square } = require("./shapes");

describe("Shape", () => {
	describe("circle", () => {
		it("circle string", () => {
			const newCircle = new Circle("it", "purple", "pink");
			const result = newCircle.render();
			const expectSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50%" cy="50%" r="80" fill="pink" />
            <text x="50%" y="50%" font-size="50" dominant-baseline="middle" text-anchor="middle" fill="purple">it</text>
            </svg>`.replace(/\s/g, "");
			expect(result.replace(/\s/g, "")).toEqual(expectSVG);
		});
	});

	describe("triangle", () => {
		it("triangle string", () => {
			const newTriangle = new Triangle("him", "white", "green");
			const result = newTriangle.render();
			const expectSVG = `<svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="100,5 195,173 5,173" fill="green" />
            <text x="50%" y="60%" font-size="50" dominant-baseline="middle" text-anchor="middle" fill="white">him</text>
        </svg>`.replace(/\s/g, "");
			// Regex used to remove white spaces
			expect(result.replace(/\s/g, "")).toEqual(expectSVG);
		});
	});

	describe("square", () => {
		it("square string", () => {
			const newSquare = new Square("her", "white", "red");
			const result = newSquare.render();
            const expectSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="25" y="25" width="200" height="200" fill="red"/>
            <text x="40%" y="55%" font-size="50" dominant-baseline="middle" text-anchor="middle" fill="white">her</text>
            </svg>`.replace(/\s/g, "");
			expect(result.replace(/\s/g, "")).toEqual(expectSVG);
		});
	});
});
