type Category = "general" | "business" | "entertainment" | "health" | "science" | "sports" | "technology";

type Article = {
    author: string | null;
    title: string;
    description: string;
    url: string;
    language: string;
    country: string;
    image: string | null;
    published_at: string;
    category: string;
    source: string;
}

type Pagination = {
    total: Int
    limit: Int
    offset: Int
     total: Int
}

type NewsResponse = {
    pagination: Pagination;
    data: Article[];
};