import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
    ],
  },
]);

export default router;
