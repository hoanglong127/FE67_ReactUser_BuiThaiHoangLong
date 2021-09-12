import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import Detail from "./views/Detail";
import Header from "./components/Header";
import Signin from "./views/Signin";
import Signup from "./views/Signup";
import ShowUser from "./views/ShowUser";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "./store/actions/user";
import { AuthRoute } from "./HOCs/Route";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("t");
    if (token) {
      dispatch(fetchUser);
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Switch>
          <Route path="/detail/:id" component={Detail} />
          <AuthRoute path="/signin" component={Signin} redirectPath="/" />
          <AuthRoute path="/signup" component={Signup} redirectPath="/" />
          <AuthRoute path="/showuser" component={ShowUser} redirectPath="/" />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
