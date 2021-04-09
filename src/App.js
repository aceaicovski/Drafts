// import './App.css';
import * as c from "./components";
import { Home } from './pages/HomePage/Home';
import { SignUpPage } from './pages/SignUp/SignUpPage'
import { NewsPage } from './pages/NewsPage/NewsPage'
import { BlogPage } from './pages/BlogPage/BlogPage'
import { ArticlePage } from './pages/ArticlePage/ArticlePage'
import * as scroll from './components'
import GlobalStyle from './globalStyles'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App () {  

  return (
    
      <Router>
        <GlobalStyle />
        <c.Navbar/>
        <scroll.ScrollPageToTop>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/sign-up' exact component={SignUpPage} />
            <Route path='/news/id:newsId' component={ArticlePage} />
            <Route path='/news' exact component={NewsPage} />
            <Route path='/blog' exact component={BlogPage} />
          </Switch>
        </scroll.ScrollPageToTop>
        <c.Footer />
        
      </Router> 
    
  );
}

export default App;
