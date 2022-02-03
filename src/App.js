import { Sidebar } from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Homepage from "./components/pages/Homepage";
import "../src/components/app.css";
import UserList from "./components/pages/userList/UserList"
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import User from "./components/pages/user/User";
import NewUser from "./components/pages/newUser/NewUser";

function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar/> 
        <Switch>
        <Route exact path="/">
          <Homepage/>
        </Route>
        <Route path="/users">
          <UserList/>
        </Route>
        <Route path="/user/:userId">
          <User/>
        </Route>
        <Route path="/newUser">
          <NewUser/>
        </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
