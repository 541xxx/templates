import "./App.scss";
import "antd-mobile/dist/antd-mobile.css";
import { renderRoutes } from "react-router-config";
import BaseLayout from "./layouts";
import { useLocation } from "react-router-dom";
function App({route} : {route?: any}) {
  let location = useLocation();
  let props = {
    loading: false,
    location,
    route: route.routes
  };
  return (
    <div className="App">
      <BaseLayout {...props}>
        {renderRoutes(route.routes)}
      </BaseLayout>
    </div>
  );
}

export default App;

