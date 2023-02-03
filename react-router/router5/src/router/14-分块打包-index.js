import loadable from "@loadable/component";
import Loading from "./Loading.js";

const LoadableComponent = loadable(() => import("./Dashboard.js"), {
  fallback: <Loading />
});

export default class LoadableDashboard extends React.Component {
  render() {
    return <LoadableComponent />;
  }
}


// {
//   "presets": ["@babel/preset-react"],
//   "plugins": ["@babel/plugin-syntax-dynamic-import"]
// }