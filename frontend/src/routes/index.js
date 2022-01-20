import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home.js";
import NewPost from "../pages/NewPost.js";
import Admin from "../pages/Admin.js";
import Post from "../pages/Post.js";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/admin" exact component={Admin} />
      <Route path="/admin/post" exact component={NewPost} />
      <Route path="/:category/:title" component={Post} />
    </Switch>
  );
}
