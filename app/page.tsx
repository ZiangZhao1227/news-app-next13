import { categories } from "../constants";
import fetchNews from "../utils/fetchNews";
import NewsList from "./NewsList";

async function Homepage() {
  const news: NewsResponse = await fetchNews(categories.join(","));

  return (
    <div>
      <NewsList news={news}></NewsList>
    </div>
  );
}

export default Homepage;
