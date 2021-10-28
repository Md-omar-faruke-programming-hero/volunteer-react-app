import { BrowserRouter,Switch,Route } from "react-router-dom";
import AuthProvider from "./Component/AuthProvider/AuthProvider";
import Event from "./Component/Event/Event";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import MyEvent from "./Component/MyEvent/MyEvent";
import PrivateRouter from "./Component/PrivateRouter/PrivateRouter";
import RegisterAsVolunteer from "./Component/RegisterAsVolunteer/RegisterAsVolunteer";
import VolunteerList from "./Component/VolunteerList/VolunteerList";




function App() {
  return (
    <div >
      <AuthProvider>
      <BrowserRouter>
        <Header></Header>
          <Switch>
          <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/event">
              <Event></Event>
            </Route>
            <Route path="/omar">
              <MyEvent></MyEvent>
            </Route>
            <Route path="/volunteerList">
              <VolunteerList></VolunteerList>
            </Route>
            <PrivateRouter exact path="/register/:id">
              <RegisterAsVolunteer></RegisterAsVolunteer>
            </PrivateRouter>
          </Switch>
      </BrowserRouter>
     
      </AuthProvider>
    </div>
  );
}

export default App;
