import "./App.css";
import "./variables.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import { AnimeContextProvider } from "./contexts/AnimeContext";
import AnimeInfo from "./pages/AnimeInfoPage/AnimeInfo";

// LAYOUTS
import AnimeInfoLayout from "./layouts/AnimeInfoLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Homepage />} />
      <Route path="info" element={<AnimeInfoLayout />}>
        <Route path=":id" element={<AnimeInfo />} />
      </Route>
    </Route>
  )
);

const App = () => {
  return (
    <div className="App">
      <AnimeContextProvider>
        <RouterProvider router={router} />
      </AnimeContextProvider>
    </div>
  );
};

export default App;
