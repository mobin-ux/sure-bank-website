import { Switch, Route } from "react-router-dom";
import Home from "../Components/Home/Home";
import Farm from "../Components/Farm/Farm";
const Router = () => {
  return (
    <Switch>
      <Route exact component={Home} path="/" />
      <Route exact component={Farm} path="/Farm" />
    </Switch>
  );
};
export default Router;