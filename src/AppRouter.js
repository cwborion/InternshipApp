//Components
import LoginPage from './components/LoginPage';
import DashStudentPage from './components/DashStudentPage';

//Dependencies
import { BrowserRouter, Route, Link } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

const AppRouter () => (
  <Router>
    <Route exact path="/" component={Home}/>
    <Route path="/category" component={Category}/>
    <Route path="/login" component={Login}/>
    <Route path="/products" component={Products}/>
  </Router>
);

export default AppRouter;
