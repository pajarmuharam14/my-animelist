/* eslint-disable no-undef */
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./Pages/HomePage";
import TopAnimePage from "./Pages/TopAnimePage";
import Search from "./Pages/Search";
import Anime from "./Pages/Anime";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/topAnime",
    element: <TopAnimePage />,
  },
  {
    path: "/search/:keyword",
    element: <Search />,
  },
  {
    path: "/anime/:id",
    element: <Anime />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
