import React from "react";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { useMe } from "../hooks/useMe";
import { Podcast } from "../pages/listener/podcast";
import { Podcasts } from "../pages/listener/podcasts";

export const ListenerRoutes = [
  <Route key={1} path="/" exact>
    <Podcasts />
  </Route>,
  <Route key={2} path="/podcast/:id" exact>
    <Podcast />
  </Route>,
];

export const LoggedInRouter = () => {
  const { data, loading, error } = useMe();
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
      {/* <Redirect to="/" /> */}
      <Footer />
    </Router>
  );
};
