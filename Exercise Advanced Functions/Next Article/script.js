function getArticleGenerator(articles) {
    return function showNext() {
        if (articles.length > 0) {
            let output = document.getElementById('content')
            let article = document.createElement('article')
            article.textContent = articles.shift();
            output.appendChild(article)
        } else {
            return
        }

    }
}


