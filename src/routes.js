import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ConfiguratorView from './containers/pages/configurator'
import TestimonialsView from './containers/pages/testimonials'
// import { ConnectedRouter } from "react-router-redux";

// const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       isLoggedIn ? (
//         <Component {...props} />
//       ) : (
//         <Redirect
//           to={{
//             pathname: "/signin",
//             state: { from: props.location }
//           }}
//         />
//       )
//     }
//   />
// );
const PublicRoutes = () => {
  return (
    <Router >
      <div>
        <Route
          exact
          path={"/configurator"}
          component={ConfiguratorView}
        />
        <Route
          exact
          path={"/testimonials"}
          component={TestimonialsView}
        />
        {/* <Route
          exact
          path={"*"}
          component={asyncComponent(() => import("./containers/Page/404"))}
        /> */}

      </div>
    </Router>
  );
};

export default PublicRoutes;