import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { renderRoutes } from "react-router-config";
import Home from "./pages/home/index";
import About from "./pages/about/index";
import { BrowserRouter as Router } from "react-router-dom";

const routes = [
  {
    component: App,
    routes: [
      {
        path: "/",
        exact: true,
        component: Home
      },
      {
        path: "/about",
        exact: true,
        component: About
      }
    ]
  }
];


ReactDOM.render(
  <Router>
    {/* kick it all off with the root route */}
    {renderRoutes(routes)}
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
