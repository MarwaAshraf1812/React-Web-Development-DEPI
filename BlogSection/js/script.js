const url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7f21647b2998492e98a47d5f1ba05573"
const postTitle = document.querySelector('.post-title');
const postImage = document.querySelector('.post-image');
const postDate = document.querySelector('.post-date');
const postAuthor = document.querySelector('.post-author');
const readBtn = document.querySelector('.readBtn');

async function getNews(url) {
    try {
        const response = await fetch(url);


        if (!response.ok) {
            throw new Error(`An error occurred: ${response.statusText}`);
        }

        const dataJson = await response.json();
        const articles = dataJson.articles;


        if (articles.length === 0) {
            throw new Error('No articles found');
        }

        const article = articles[0];
        console.log(article);

        postTitle.innerHTML = article.title || "No title available";
        postAuthor.innerHTML = article.author || "No author available";
        postDate.innerHTML = article.publishedAt || "No date available";


        readBtn.addEventListener('click', () => {
            window.open(article.url, '_blank');
        });


    } catch (error) {
        console.error(error);
    }
    
}
getNews(url);
