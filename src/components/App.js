import React from "react";
import "./App.css";
import "../assets/fonts/stylesheet.css";
import { Route, Switch } from "react-router-dom";
import Header from "./common/Header";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import WorkPage from "./work/WorkPage";
import BlogPage from "./blog/BlogPage";
import ContactPage from "./contact/ContactPage";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/work" component={WorkPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
