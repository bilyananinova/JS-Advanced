const rgbToHexColor = require('./rgbToHex')
const { expect } = require('chai');
/*
•	Take three integer numbers, representing the red, green and blue values of 
an RGB color, each within range [0…255]
•	Return the same color in hexadecimal format as a string (e.g. '#FF9EAA')
•	Return undefined if any of the input parameters are of invalid 
type or not in the expected range
*/
describe('RGB to HEX', () => {
    it('isInteger numbers', () => {
        expect(rgbToHexColor(3.5, 0, 0)).to.be.undefined
    });

    it('return color', () => {
        expect(rgbToHexColor(66, 135, 245)).to.equal('#4287F5')
    });

    it('isBlue color', () => {
        expect(rgbToHexColor(0, 0, 255)).to.equal('#0000FF')
    });

    it('isGreen', () => {
        expect(rgbToHexColor(0, 255, 0)).to.equal('#00FF00')
    });

    it('isRed', () => {
        expect(rgbToHexColor(255, 0, 0)).to.equal('#FF0000')
    });


    it('with negative first number', () => {
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined
    });

    it('with negative second number', () => {
        expect(rgbToHexColor(0, -1, 0)).to.be.undefined
    });

    it('with negative third number', () => {
        expect(rgbToHexColor(0, 0, -1)).to.be.undefined
    });

    it('first number more than 255', () => {
        expect(rgbToHexColor(256, 0, 0)).to.be.undefined
    });

    it('second number more than 255', () => {
        expect(rgbToHexColor(0, 256, 0)).to.be.undefined
    });

    it('third number more than 255', () => {
        expect(rgbToHexColor(0, 0, 256)).to.be.undefined
    });

    it('undefined with invalid first input', () => {
        expect(rgbToHexColor('a', 0, 0)).to.be.undefined
    });

    it('undefined with invalid second input', () => {
        expect(rgbToHexColor(0, 'a', 0)).to.be.undefined
    });

    it('undefined with invalid third input', () => {
        expect(rgbToHexColor(0, 0, 'a')).to.be.undefined
    });
}
)