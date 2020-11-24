import React,{useState} from 'react';
import NewsContainer from '../../components/news-container/news-container.component';
import './main-page.styles.css';

const MainPage = () => {
    //handle panel animation 
    const [panels, setPanels] = useState(false);
    // handle main body z-index
    const [mainBody, setMainBody] = useState(false)

    const handleLink = (e) => {
       e.preventDefault();
       setPanels(true);
       setTimeout(() => {
            setMainBody(true);
        },1000)
    }

    return (
        <div className='main-page' style={panels ? null : {position: 'fixed'}}>
             
                <div className="overlay" id="overlay">

                    <main className="content home">
                    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0, 0, 100, 100" className="panels">
                        <polygon points="0,0 0,100 100,0" className={`dark ${panels ? 'transform-left' : null}`}></polygon>
                        <polygon points="100,100 0,100 100,0" className={`light ${panels ? 'transform-right' : null}`}></polygon>
                    </svg>

                    
                        <a href="" className={`main-link main-link-top ${panels ? 'transform-left' : null}`} onClick={handleLink}>
                        <h3>News</h3>
                        <h3>That Matters</h3>
                        
                        </a>

                        <a href="" className={`main-link main-link-bottom ${panels ? 'transform-right' : null}`} onClick={handleLink}>
                        <h3>News that</h3>
                        <h3>People read</h3>
                        
                        </a>

                        
                
                </main>

                </div>

                <div class="main-body" style={mainBody ? {zIndex: '9'} : null}>

                     <h1 >Most Popular</h1>   
   
                    <NewsContainer />
                       
                  
                 </div>
        </div>
        
        )
}

export default MainPage;