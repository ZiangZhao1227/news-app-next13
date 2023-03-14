import fetchNews from "../../../utils/fetchNews";
import NewsList from "../../NewsList";

type Props = {
  params: {
    category: Category;
  };
};

async function NewsCategory({ params: { category } }: Props) {
  const news: NewsResponse = await fetchNews(category);
  return (
    <div>
      <h1 className="header-title">{category}</h1>
      <NewsList news={news}></NewsList>
    </div>
  );
}

export default NewsCategory;
