import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import FormsPage from "./components/FormsPage.jsx";
import DisplayPage from "./components/DisplayPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<FormsPage />} />
      <Route path="/display" element={<DisplayPage />} />
    </Route>
  )
);
function App() {
  return (
    <>
      <div className="container mx-auto max-w-md ">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
