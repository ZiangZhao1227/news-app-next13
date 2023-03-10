export default function sortNewsByImage(news: NewsResponse) {
    const newsWithImage = news.data.filter(article => article.image !== null)
    const newsWithoutImage = news.data.filter(article => article.image === null)
    return {
        ...news,
        data: [...newsWithImage, ...newsWithoutImage]
    }
}