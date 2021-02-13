let ChristmasMovies = require('./02.ChristmasMovies_Resources')
let expect = require("chai").expect;
let assert = require("chai").assert;

describe("ChristmasMovies", function () {
    describe("construvctor", function () {
        it("...", function () {
            let christmas = new ChristmasMovies();
            christmas.movieCollection = []
            christmas.watched = {}
            christmas.actors = []

            expect(christmas.movieCollection).to.be.empty;
            expect(christmas.watched).to.be.empty;
            expect(christmas.actors).to.be.empty;
        });
    });

    describe("buyMovie", function () {
        it("...", function () {
            let christmas = new ChristmasMovies();
            expect(christmas.movieCollection).to.not.include('Home Alone');
            expect(christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])).to.be.equal('You just got Home Alone to your collection in which Macaulay Culkin, Joe Pesci, Daniel Stern are taking part!')
            expect(() => christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])).to.be.throw(`You already own Home Alone in your collection!`);
        });
    });

    describe("discardMovie", function () {
        it("...", function () {
            let christmas = new ChristmasMovies();
            expect(() => christmas.discardMovie('Home Alone')).throw(`Home Alone is not at your collection!`)

            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])
            expect(() => christmas.discardMovie('Home Alone')).throw(`Home Alone is not watched!`)

            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])
            christmas.watchMovie('Home Alone')
            expect(christmas.discardMovie('Home Alone')).to.equal(`You just threw away Home Alone!`)

        });
    });

    describe("watchMovie", function () {
        it("...", function () {
            let christmas = new ChristmasMovies();
            expect(() => christmas.watchMovie('Home Alone')).to.throw('No such movie in your collection!')

            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])
            christmas.watchMovie('Home Alone')
            expect(christmas.watched['Home Alone']).to.deep.equal(1)

        });
    });

    describe("favouriteMovie", function () {
        it("...", function () {
            let christmas = new ChristmasMovies();

            expect(() => christmas.favouriteMovie()).to.throw('You have not watched a movie yet this year!')

            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])
            christmas.watchMovie('Home Alone')
            let favourite = Object.entries(christmas.watched).sort((a, b) => b[1] - a[1]);

            expect(christmas.favouriteMovie()).to.equal('Your favourite movie is Home Alone and you have watched it 1 times!')
        });

        it("...", function () {
            let christmas = new ChristmasMovies();
            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            christmas.buyMovie('Home Alone 2', ['Macaulay Culkin']);
            christmas.buyMovie('Last Christmas', ['Emilia Clarke', 'Henry Golding']);
            christmas.buyMovie('The Grinch', ['Benedict Cumberbatch', 'Pharrell Williams']);
            christmas.watchMovie('Home Alone');
            christmas.watchMovie('Home Alone');
            christmas.watchMovie('Home Alone');
            christmas.watchMovie('Home Alone 2');
            christmas.watchMovie('The Grinch');
            christmas.watchMovie('Last Christmas');
            christmas.watchMovie('Home Alone 2');
            christmas.watchMovie('Last Christmas');
            christmas.discardMovie('The Grinch');
            
            expect(christmas.favouriteMovie()).to.equal('Your favourite movie is Home Alone and you have watched it 3 times!')
        });
    });

    describe("mostStarredActor", function () {
        it("...", function () {
            let christmas = new ChristmasMovies();
            expect(() => christmas.mostStarredActor()).to.throw(`You have not watched a movie yet this year!`)

            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])

            expect(christmas.mostStarredActor()).to.equal('The most starred actor is Macaulay Culkin and starred in 1 movies!')
        });

        it("...", function () {
            let christmas = new ChristmasMovies();
            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            christmas.buyMovie('Home Alone 2', ['Macaulay Culkin']);
            christmas.buyMovie('Last Christmas', ['Emilia Clarke', 'Henry Golding']);
            christmas.buyMovie('The Grinch', ['Benedict Cumberbatch', 'Pharrell Williams']);
            christmas.watchMovie('Home Alone');
            christmas.watchMovie('Home Alone');
            christmas.watchMovie('Home Alone');
            christmas.watchMovie('Home Alone 2');
            christmas.watchMovie('The Grinch');
            christmas.watchMovie('Last Christmas');
            christmas.watchMovie('Home Alone 2');
            christmas.watchMovie('Last Christmas');
            christmas.discardMovie('The Grinch');

            expect(christmas.mostStarredActor()).to.equal('The most starred actor is Macaulay Culkin and starred in 2 movies!')
        });
    });
});
