import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../pages/Home";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);

export default router;
