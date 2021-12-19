import { Switch, Route } from "react-router-dom";
import { routeList } from "./list";
export default function Router() {
  const renderRoutes = routeList.map((item) => (
    <Route exact  key={item.id} path={item.route}>
      {<item.component />}
    </Route>
  ));
  return <Switch>{renderRoutes}</Switch>;
}
