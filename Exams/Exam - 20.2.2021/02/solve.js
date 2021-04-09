class Story {

    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length == 0) {
            return `${this.title} has 0 likes`
        }

        if (this._likes.length == 1) {
            return `${this._likes[0]} likes this story!`
        }

        return `${this._likes[0]} and ${this._likes.length} others like this story!`

    }

    like(username) {

        if (this._likes.includes(username)) {
            throw new Error(`You can't like the same story twice!`)
        }

        if (username == this.creator) {
            throw new Error(`You can't like your own story!`)
        }
        this._likes.push(username)
        return `${username} liked ${this.title}!`
    }

    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error(`You can't dislike this story!`)
        }
        let user = this._likes.indexOf(username)
        this._likes.splice(user, 1)
        return `${username} disliked ${this.title}`

    }

    comment(username, content, id) {
        let comment = this._comments.find(c => c.id == id)
        if (!id) {
            let id = this._comments.length + 1
            this._comments.push({
                id,
                username,
                content,
                reply: []
            })

            return `${username} commented on ${this.title}`
        }

        if (comment) {
            let lastcommentId = comment.reply[comment.reply.length - 1]
            let id
            if (lastcommentId == undefined) {
                id = comment.id + 0.1
            } else {
                id = lastcommentId.id + 0.1
                id = Number(id.toFixed(1))
            }
            comment.reply.push({ id, username, content })
            return `You replied successfully`
        }
    }

    toString(sortingType) {
        let result = [
            `Title: ${this.title}`,
            `Creator: ${this.creator}`,
            `Likes: ${this._likes.length}`,
            'Comments:'
        ];

        if (sortingType == 'asc') {
            let comments = Object.values(this._comments).sort((a, b) => 
                a.id - b.id
            );

            comments.forEach(element => {
                result.push(`-- ${element.id}. ${element.username}: ${element.content}`)
                if (element.reply.length > 0) {
                    let replies = element.reply.sort((a, b) => 
                        a.id - b.id
                    )

                    replies.forEach(r => result.push(`--- ${r.id}. ${r.username}: ${r.content}`))
                }
            });

        } else if (sortingType == 'desc') {
            let comments = Object.values(this._comments).sort((a, b) => 
                b.id - a.id
            );

            comments.forEach(element => {
                result.push(`-- ${element.id}. ${element.username}: ${element.content}`)
                if (element.reply.length > 0) {
                    let replies = element.reply.sort((a, b) => 
                        b.id - a.id
                    )

                    replies.forEach(r => result.push(`--- ${r.id}. ${r.username}: ${r.content}`))
                }
            });
        } else if (sortingType == 'username') {
            let comments = Object.values(this._comments).sort((a, b) => 
                a.username - b.username
            );

            comments.forEach(element => {
                result.push(`-- ${element.id}. ${element.username}: ${element.content}`)
                if (element.reply.length > 0) {
                    let replies = element.reply.sort((a, b) => 
                        a.username.localeCompare(b.username)
                    )

                    replies.forEach(r => result.push(`--- ${r.id}. ${r.username}: ${r.content}`))
                }
            });
        }

       return result.join('\n')
    }

}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));




// let art = new Story("My Story", "Anny");
// art.like("John")
// console.log(art.likes);
// art.dislike("John"),
//     console.log(art.likes);
// console.log(art.comment("Sammy", "Some Content"))
// console.log(art.comment("Ammy", "New Content"))
// console.log(art.comment("Zane", "Reply", 1))
// console.log(art.comment("Jessy", "Nice :)"))
// console.log(art.comment("SAmmy", "Reply@", 1))
// console.log(art.toString('desc'));