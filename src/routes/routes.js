// Routing
import { createBrowserRouter } from "react-router-dom";

import FormsPage from "../components/formsPage";
import DisplayPage from "../components/DisplayPage";

export const router = createBrowserRouter([
  { path: "/", element: <FormsPage /> },
  { path: "/display", element: <DisplayPage /> },
]);
