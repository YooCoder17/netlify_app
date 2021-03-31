import { BrowserRouter as Router, Route } from 'react-router-dom'

import LandingPage from 'pages/LandingPage'
import ProjectPage from 'pages/ProjectPage'
import ProjectDetailPage from 'pages/ProjectDetailPage'
import TeamPage from 'pages/TeamPage'
import DiscussProjectPage from 'pages/DiscussProjectPage'

import 'assets/css/styles.css';

function App() {
  return (
    <Router>
      <Route exact path="/" component={LandingPage}></Route>
      <Route exact path="/project" component={ProjectPage}></Route>
      <Route exact path="/project/:id" component={ProjectDetailPage}></Route>
      <Route exact path="/team" component={TeamPage}></Route>
      <Route exact path="/discuss-project" component={DiscussProjectPage}></Route>
    </Router>
  );
}

export default App;
