import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
