import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/home-page";
import Root from "./pages/root";
import AddPage from "./pages/add-page";
import FindPage from "./pages/find-page";
import AllPage from "./pages/all-page";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path="add" element={<AddPage />} />
      <Route path="find" element={<FindPage />} />
      <Route path="all" element={<AllPage />} />
    </Route>
  )
);

export default router;
