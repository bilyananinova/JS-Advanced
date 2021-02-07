function result(command) {

    let commands = {
        upvote: () => this.upvotes += 1,

        downvote: () => this.downvotes += 1,

        score: () => {
            let up = this.upvotes;
            let down = this.downvotes;

            let total = up + down;
            let balance = up - down;

            let rating = 'new'

            if ((up / total * 100) > 66) {
                rating = 'hot'
            } else if (balance >= 0 && (up > 100 || down > 100)) {
                rating = 'controversial'
            }
             if (balance < 0) {
                rating = 'unpopular'
            } 
            if (total < 10) {
                rating = 'new'
            }

            if (total > 50) {
                let obfuscated = Math.ceil(0.25 * Math.max(up, down))
                up += obfuscated
                down += obfuscated
            }

            return [up, down, balance, rating]
        }
    }
    return commands[command]() // >---> upvote() || downvote() || score()

}

// var forumPost = {
//     id: '1',
//     author: 'pesho',
//     content: 'hi guys',
//     upvotes: 1,
//     downvotes: 0
// };

// var answer = result.call(forumPost, 'score');
// var expected = [1, 0, 1, 'new'];

let forumPost = {
    id: '1',
    author: 'pesho',
    content: 'hi guys',
    upvotes: 0,
    downvotes: 0
};

result.call(forumPost, 'upvote');
var answer = result.call(forumPost, 'score');
console.log(answer);
var expected = [1, 0, 1, 'new'];

// let post = {
//     id: '3',
//     author: 'emil',
//     content: 'wazaaaaa',
//     upvotes: 100,
//     downvotes: 100
// };
// solution.call(post, 'upvote');
// solution.call(post, 'downvote');
// let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
// solution.call(post, 'downvote');         // (executed 50 times)
// score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']
