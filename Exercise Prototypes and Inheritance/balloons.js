function createBalloons() {

    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        }
    };

    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight)
            this._ribbon = {
                color: ribbonColor,
                length: ribbonLength
            }
        }

        get ribbon() {
            return this._ribbon;
        }
    };

    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, gasWeight, ribbonColor, ribbonLength)
            this._text = text
        }

        get text() {
            return this._text
        }
    };

    return {
        Balloon: Balloon,
        PartyBalloon: PartyBalloon,
        BirthdayBalloon: BirthdayBalloon
    }
}

let balloons = createBalloons()

let b = new balloons.Balloon('red', 10);
console.log(b);
let p = new balloons.PartyBalloon('red', 10, 'yellow', 100);
console.log(p);
let bb = new balloons.BirthdayBalloon('red', 10, 'yellow', 100, 'HBD');
console.log(bb);