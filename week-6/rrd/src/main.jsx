import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import {
  About,
  Contact,
  Github,
  Home,
  NotFound,
  User,
  githubInfoLoader,
} from "./components";
import "./index.css";

/* const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]); */

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Layout />}
    >
      <Route
        index
        element={<Home />}
      />
      <Route
        path="about"
        element={<About />}
      />
      <Route
        path="contact"
        element={<Contact />}
      />

      <Route
        path="github"
        element={<Github />}
        loader={githubInfoLoader}
      />

      <Route
        path="user/:userId"
        element={<User />}
      />

      <Route
        path="*"
        element={<NotFound />}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
