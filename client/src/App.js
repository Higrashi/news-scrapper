import {Route,Switch} from 'react-router-dom';
import MainPage from './pages/main-page/main-page';
import NavHeader from './components/header/nav-header.component';
import NewsPage from './pages/news-page/news-page';
import './App.css';

function App() {
  return (
    <div className="App">
        <NavHeader />
        <Switch>
          <Route path='/' exact component={MainPage} />
          <Route path='/news-page/:type' component={NewsPage} />
        </Switch>
       
    </div>
  );
}

export default App;
