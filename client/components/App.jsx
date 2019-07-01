import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";

import Nav from "./Nav";
import ContactUs from "./ContactUs";
import FindUs from "./FindUs";
import StudyWithUs from "./StudyWithUs";

const App = () => {
  return (
    <Router>
      <>
        <Route path="/" component={Nav} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/find-us/:campus" component={FindUs} />
        <Route exact path="/study-with-us" component={StudyWithUs} />
      </>
    </Router>
  );
};

export default App;
