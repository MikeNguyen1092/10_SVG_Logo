const {Circle, Triangle, Square} = require('./shapes');

describe ('Shape', () => {
    describe('circle', () => {
        it('circle string', () =>{
            const newCircle = new Circle();
            const result = newCircle.render(`Circle`)
            expect(result).toEqual('Circle')
        })
    })

    describe('triangle', () => {
        it('triangle string', () =>{
            const newTriangle = new Triangle();
            const result = newTriangle.render(`Triangle`)
            expect(result).toEqual('Triangle')
        })
    })

    describe('square', () => {
        it('square string', () =>{
            const newSquare = new Square();
            const result = newSquare.render(`Square`)
            expect(result).toEqual('Square')
        })
    })
})