const routes = [
    {
        path: "/",
        component: Root,
        loadData: () => getSomeData()
    }
    // etc.
];
// 然后使用此配置在应用程序中呈现您的路线：
import { routes } from "./routes.js";

function App() {
    return (
        <Switch>
            {routes.map(route => (
                <Route {...route} />
            ))}
        </Switch>
    );
}
// 然后在服务器上你会有类似的东西：
import { matchPath } from "react-router-dom";

// inside a request
const promises = [];
// the first to match
routes.some(route => {
    // use `matchPath` here
    const match = matchPath(req.path, route);
    if (match) promises.push(route.loadData(match));
    return match;
});

Promise.all(promises).then(data => {
    // do something w/ the data so the client
    // can access it then render the app
});