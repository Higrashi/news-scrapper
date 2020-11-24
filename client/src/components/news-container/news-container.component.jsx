import React,{useEffect, useState} from 'react';
import NewsItem from '../news-item/news-item.component';
import './news-container.styles.css';


const NewsContainer = () => {

   //news state    
    const [news, setNews] = useState([]);
   

   

    useEffect(() => {
        // make request to New York Time's api to get most popular articles and set it to the news state
        const getNews = async () => {
            
            const getNews = await fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${process.env.REACT_APP_NYT_API}`);
            const result = await getNews.json();
            setNews([...result.results])
        }

        getNews()
    },[])

    return (
        <div className='news-container'>

            {
                news.length > 0 ?
                news.map(item => {
                    return <NewsItem item={item} isCategory={false}/>
                }) :
                null
            }

        </div>
    )
}

export default NewsContainer;