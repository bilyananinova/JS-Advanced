function solution(command) {
    let commandsList = () => {
        return {
            upvote: () => this.upvotes += 1,

            downvote: () => this.downvotes += 1,

            score: () => {
                let upvote = this.upvotes;
                let downvote = this.downvotes;
                let total = upvote + downvote;
                let balance = upvote - downvote;

                if (total > 50) {
                    let obfuscated = Math.ceil(0.25 * Math.max(upvote, downvote));
                    upvote += obfuscated
                    downvote += obfuscated
                }
                
                let rating = 'new'

                if ((upvote / total) * 100 > 66) {
                    rating = 'hot'
                } else if (balance >= 0 && (upvote > 0 || downvote > 0)) {
                    rating = 'controversial'
                }
                if (balance < 0) {
                    rating = 'unpopular'
                }
                if (total < 10) {
                    rating = 'new'
                }

                return [upvote, downvote, balance, rating]
            }
        }
    }

    let commands = commandsList();
    return commands[command]()

}

var forumPost = {
    id: '1234',
    author: 'author name',
    content: 'these fields are irrelevant',
    upvotes: 4,
    downvotes: 5
};

solution.call(forumPost, 'downvote');
var answer = solution.call(forumPost, 'score');
console.log(answer);
var expected = [4, 6, -2, 'unpopular'];

// Past border case
solution.call(forumPost, 'downvote');
answer = solution.call(forumPost, 'score');
console.log(answer);
expected = [4, 6, -2, 'unpopular'];

solution.call(forumPost, 'upvote');
solution.call(forumPost, 'upvote');
answer = solution.call(forumPost, 'score');
console.log(answer);
expected = [6, 6, 0, 'new'];

// 38 Upvotes
for (let i = 0; i < 38; i++) {
    solution.call(forumPost, 'upvote');
}
answer = solution.call(forumPost, 'score');
console.log(answer);
expected = [44, 6, 38, 'hot'];

// Past obfuscation threshold
solution.call(forumPost, 'downvote');
answer = solution.call(forumPost, 'score');
console.log(answer);
expected = [55, 18, 37, 'hot'];

// Bellow hot threshold
forumPost.upvotes = 132;
forumPost.downvotes = 68;

answer = solution.call(forumPost, 'score');
console.log(answer);
expected = [165, 101, 64, 'controversial'];

// Past hot threshold
forumPost.upvotes = 133;

answer = solution.call(forumPost, 'score');
console.log(answer);
expected = [167, 102, 65, 'hot'];

console.log('*'.repeat(50));

var forumPost1 = {
    id: '1',
    author: 'pesho',
    content: 'hi guys',
    upvotes: 1,
    downvotes: 0
};
answer = solution.call(forumPost1, 'score');
console.log(answer);
expected = [1, 0, 1, 'new'];

console.log('*'.repeat(50));

let forumPost2 = {
    id: '1',
    author: 'pesho',
    content: 'hi guys',
    upvotes: 0,
    downvotes: 0
};
solution.call(forumPost2, 'upvote');
answer = solution.call(forumPost, 'score');
console.log(answer);
expected = [1, 0, 1, 'new'];

console.log('*'.repeat(50));

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
console.log(score);
for (let i = 1; i <= 50; i++) {
    solution.call(post, 'downvote');         // (executed 50 times)
}
score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']
console.log(score);
