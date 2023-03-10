import { gql } from 'graphql-request'
import sortNewsByImage from './sortNewsByImage'

const fetchNews = async (
    category?: Category | string,
    keywords?: string,
    isDymamic?: boolean,
) => {
    // GraphQL query
    const query = gql`
    query MyQuery(
        $access_key: String!
        $categories: String!
        $keywords: String
        ) {
        myQuery(
            access_key: $access_key
            categories: $categories 
            countries: "gb, us, cn, se" 
            keywords: $keywords 
            sort: "published_desc"
            ) {
        data {
            author
            category
            country
            description
            image
            language
            published_at
            source
            title
            url
        }
        pagination {
            count
            limit
            offset
            total
        }
        }
    }
`
    //  Fetch function with Next.js 13 caching
    const res = await fetch("https://strausberg.stepzen.net/api/intent-gorilla/__graphql", {
        method: "POST",
        cache: isDymamic ? "no-cache" : "default",
        next: isDymamic ? { revalidate: 0 } : { revalidate: 30 },
        headers: {
            "Content-Type": "application/json",
            Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
        },
        body: JSON.stringify({
            query,
            variables: {
                access_key: process.env.MEDIASTACK_API_KEY,
                categories: category,
                keywords: keywords,
            },
        })
    })
    const newsResponse = await res.json()

    //console.log(newsResponse.data.myQuery)

    // Sort function by images vs not images present

    const data = sortNewsByImage(newsResponse.data.myQuery)

    // Return result

    return data

}

export default fetchNews