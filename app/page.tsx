import { categories } from "../constants";
import fetchNews from "../utils/fetchNews";

async function Homepage() {
  const news: NewsResponse = await fetchNews(categories.join(", "));

  console.log(news)

  return <div>Homepage</div>;
}

export default Homepage;
