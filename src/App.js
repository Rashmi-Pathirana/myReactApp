import Dashboard from "./components/Dashboard";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Newblog from "./components/Newblog";
import Detailspage from "./components/Detailspage";

function App() {

  return (

    <Router>
      <Navigation/>
      <Switch>
        <Route exact path="/"><Dashboard/></Route>
        <Route path="/create">
          <Newblog/>
        </Route>
        <Route path='/posts/:id'>
           <Detailspage/>
        </Route>
      </Switch>
    </Router>

  ) ; 

}  

export default App;
