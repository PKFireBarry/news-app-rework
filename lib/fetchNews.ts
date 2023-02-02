import { gql } from "graphql-request";
import { categories } from "../constant";
import sortNewsByImage from "./sortNewsByImage";

const fectchNews = async (
    Category?: Category | string,
    keyword?: string,
    isDynamic?: boolean 
    ) => {
    //graphql query
    const query = gql`
        query myQuery {
                myQuery(
                access_key: "1b69dc5b0f360dd2301c138e50c5997e"
                countries: "us,ca,gb,au,nz"
                categories: "general,business,entertainment,health,science,sports,technology"
                sort: "published_desc"
                sources: "cnn,bbc-news,abc-news,google-news,fox-news,msnbc,al-jazeera-english,the-wall-street-journal,the-new-york-times,the-washington-post,cbc-news,usa-today,cbs-news,fox-news,abc-news,al-jazeera-english,ars-technica,buzzfeed,cbs-news,cnn,engadget,entertainment-weekly,espn,financial-post,fortune,fox-news,fox-sports,google-news,ign,mtv-news,national-geographic,nbc-news,newsweek,new-york-magazine,polygon,recode,reddit-r-all,reuters,techcrunch,the-economist,the-huffington-post,the-new-york-times,the-next-web,the-verge,the-wall-street-journal,the-washington-post,the-washington-times,time,usa-today,wired,yahoo-news,vice-news,mtv-news,nationalpost"
                limit: "100"
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
            }`;
    //fetch function to get data from api
    const res = await fetch('https://monthey.stepzen.net/graphql/news/__graphql', {
        method: 'POST', 
        cache: isDynamic ? 'no-cache' : 'default',
        next: isDynamic ? { revalidate: 0 } : { revalidate: 120 },
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
            },
        body: JSON.stringify({ 
            query, 
            variables: { 
                access_key: process.env.MEDIASTACK_API_KEY, 
                categories: Category, 
                keyword: keyword 
                    },
                }),
            }
        );
        console.log(
            "Loading data from API for categories:",
            Category,
        );

        const newsResponse = await res.json();



//sort function to sort by images or not
const news = sortNewsByImage(newsResponse.data.myQuery);


//return data
return news;


};

export default fectchNews;

