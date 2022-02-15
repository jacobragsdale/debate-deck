import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import SignIn from "./components/signIn";
import Lander from "./components/lander";
import Project from "./components/project";
import Dashboard from "./components/dashboard";
import Help from "./components/help";
import {
  FirebaseAppProvider,
  useFirestore,
  useFirestoreCollectionData
} from "reactfire";

import { BrowserRouter as Router, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <CssBaseline />
      <Route exact path="/" component={Lander} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/project" component={Project} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/help" component={Help} />
    </Router>
  );
}
