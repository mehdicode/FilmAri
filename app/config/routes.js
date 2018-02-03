// Include the React library
import React from "react";
// Include the react-router module
var router = require("react-router");
// Include the Route component
var Route = router.Route;
//  Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;
// Include the Router component
var Router = router.Router;
// Include the browserHistory prop to configure client side routing
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#browserhistory
var browserHistory = router.browserHistory;
// Reference the high-level components
import Login from "../components/Login.js";
import Main from "../components/Main";
import Registration from "../components/Registration.js";



// Export the Routes
module.exports = (
  // High level component is the Router component.
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
    
      {/* Routes show the appropriate component */}
      <Route path="Login" component={Login} />
      <Route path="Registration" component={Registration} />


      {/* If user selects any other path... we get the Home Route */}
      <IndexRoute component={Login} />

    </Route>
  </Router>
);