import fetchNews from "../../utils/fetchNews";
import NewsList from "../NewsList";

type Props = {
  searchParams?: {
    term: string;
  };
};

async function SearchPage({ searchParams }: Props) {
  const news: NewsResponse = await fetchNews(
    "general",
    searchParams?.term,
    true
  );
  return (
    <div>
      <h1 className="header-title">Search Results for:{searchParams?.term}</h1>
      <NewsList news={news}></NewsList>
    </div>
  );
}

export default SearchPage;
