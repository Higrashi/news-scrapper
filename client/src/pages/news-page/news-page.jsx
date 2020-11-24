import React,{useEffect,useState} from 'react';
import NewsItem from '../../components/news-item/news-item.component';
import './news-page.styles.css';

const NewsPage = ({match}) => {
    // type of section from route
    const type = match.params.type;
    // array of articles
    const [news, setNews] = useState([]);

    useEffect(() => {
        // get articles from New Yorks api's by section type
        const getNews = async () => {
            setNews([])
            const getNews = await fetch(`https://api.nytimes.com/svc/topstories/v2/${type}.json?api-key=${process.env.REACT_APP_NYT_API}`);
            const result = await getNews.json();
            setNews([...result.results])
        }

        getNews()
    },[type])

    
    return (
        <div className='news-page'>
            <h1 className='type-h1'>{type}</h1>

            <div className='news-container'>

                    {
                        news.length > 0 ?
                        news.map(item => {
                            return <NewsItem item={item} isCategory={true}/>
                        }) :
                        null
                    } 

</div>
        </div>
    )
}

export default NewsPage;