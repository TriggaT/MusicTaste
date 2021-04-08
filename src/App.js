import React, {Component} from "react"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import NavBar from './components/NavBar'
import PlaylistsContainer from "./containers/PlaylistsContainer";
import SignUpForm from "./components/users/SignUpForm";
import LogInForm from "./components/users/LogInForm";


class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>MusicTaste</h1>
        <Router>
          <NavBar/>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUpForm} />
          <Route exact path="/login" component={LogInForm} />
          <Route path='/playlists' render={routerProps => <PlaylistsContainer {...routerProps}/>} />
          <Route component={ErrorPage}/>
          </Switch>
        </Router>
        
      </div>
    );

  }
  
}

export default App;
