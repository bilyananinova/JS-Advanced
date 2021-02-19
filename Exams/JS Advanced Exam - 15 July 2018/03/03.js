class BookCollection {
    constructor(shelfGenre, room, shelfCapacity) {
        this.room = room;

        if (room == 'livingRoom' || room == 'bedRoom' || room == 'closet') {
            this.shelfGenre = shelfGenre;
            this.shelf = [];
            this.shelfCapacity = shelfCapacity;
        } else {
            throw new Error(`Cannot have book shelf in ${this.room}`)
        }

    }

    addBook(bookName, bookAuthor, genre) {
        let book = {}
        if (genre) {
            book = { bookAuthor, bookName, genre }
        } else {
            book = { bookAuthor, bookName }
        }

        if (this.shelfCapacity > 0) {
            this.shelf.push(book)
        } else {
            this.shelf.shift()
            this.shelf.push(book)
        }

        this.shelfCapacity--
        this.shelf.sort((a, b) => a.bookAuthor.localeCompare(b.bookAuthor))

        return this
    }

    throwAwayBook(bookName) {
        let index = this.shelf.findIndex(x => x.bookName === bookName)
        this.shelf.splice(index, 1)
        this.shelfCapacity++
        return this
    }

    showBooks(genre) {
        let result = [`Results for search "${genre}":`];

        for (const book of this.shelf) {
            if (book.genre === genre) {

                result.push(`\uD83D\uDCD6 ${book.bookAuthor} - "${book.bookName}"`)
            }
        }

        return result.join('\n')
    }

    get shelfCondition() {

        return `${this.shelfCapacity}`
    }

    toString() {
        let result = [];

        if (this.shelf.length > 0) {
            result.push(`"${this.shelfGenre}" shelf in ${this.room} contains:`)
            this.shelf.forEach(element => {
                result.push(`\uD83D\uDCD6 ${element.bookName}" - ${element.bookAuthor}`)
            });
        } else {
            return `It's an empty shelf`
        }

        return result.join('\n')
    }
}

let livingRoom = new BookCollection("Programming", "livingRoom", 5)
livingRoom.addBook("Introduction to Programming with C#", "Svetlin Nakov")
livingRoom.addBook("Introduction to Programming with Java", "Svetlin Nakov")
livingRoom.addBook("Programming for .NET Framework", "Svetlin Nakov");
console.log(livingRoom.toString());

// let garden = new BookCollection("Programming", "garden");

let bedRoom = new BookCollection('Mixed', 'bedRoom', 5);
bedRoom.addBook("John Adams", "David McCullough", "history");
bedRoom.addBook("The Guns of August", "Cuentos para pensar", "history");
bedRoom.addBook("Atlas of Remote Islands", "Judith Schalansky");
bedRoom.addBook("Paddle-to-the-Sea", "Holling Clancy Holling");
console.log("Shelf's capacity: " + bedRoom.shelfCondition);
console.log(bedRoom.showBooks("history"));


//   expected 'Results for search "history":\n📖 Cuentos para pensar – "The Guns of August"\n📖 David McCullough – "John Adams"' 
// to include 'Results for search "history":\n📖 Cuentos para pensar - "The Guns of August"\n📖 David McCullough - "John Adams"'

