import React,{useState} from 'react';
import axios from 'axios';
import noImage from '../../assets/images/no_image.png';
import {ReactComponent as Loader} from '../../assets/images/loader.svg';
import './news-item.styles.css';

const NewsItem = ({item,isCategory}) => {
    //article overlay handler 
    const [toggle, setToggle] = useState(false);
    // article body state
    const [article, setArticle] = useState([])
    
    const handleClick = async () => {
       
        setToggle(!toggle);
        //make request to server with current article url     
        const data = await axios({
            method: 'post',
            url: '/api/article/',
            data:
            {
                url: item.url
            }
           
        })
       
       //set article body to response from server 
       setArticle([...data.data]) 
    }
    // handle closing article overlay
    const handleClose = () => {
        setToggle(!toggle);
        // make article state empty 
        setArticle('')
    }

 

    return (
        <>
        <div className={`article-overlay ${toggle ? 'article-active' : null}`}>
            <button className='close-btn-article' onClick={handleClose}>&#215;</button>
            <div className="text-body">

                {
                    article.length > 0 ?
                        article.map(item => {
                            return <p>{item}</p>
                        }):
                        <Loader className='loader'/>
                }

            </div>
        </div>
        <div className='news-item' onClick={handleClick}>
            {
                isCategory ? 
                <div className='image-head-box' style={{background: `url(${item.multimedia ? item.multimedia[0].url: null})`}}></div>:
                <img src={item.media ? item.media[0]['media-metadata'][2].url : noImage} alt="" className='image-head'/>
            }
            <h2>{item.title}</h2>
            <p>{item.abstract}</p>
        </div>
        </>
    )
}

export default NewsItem;

