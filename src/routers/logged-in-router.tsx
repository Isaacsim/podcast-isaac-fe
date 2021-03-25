import React from "react";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { Header } from "../components/header";
import { useMe } from "../hooks/userMe";
import { Podcasts } from "../pages/listener/podcasts";

export const ListenerRoutes = [
  <Route path="/" exact>
    <Podcasts />
  </Route>,
];

export const LoggedInRouter = () => {
  const { data, loading, error } = useMe();

  console.log(data);
  if (!data || loading || error) {
    return (
      <div className="h-screen flex justify-center items-center text-2xl ">
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <Router>
      <Header />
      <Switch>{data.me.role === "Listener" && ListenerRoutes}</Switch>
      <Redirect to="/" />
    </Router>
  );
};
