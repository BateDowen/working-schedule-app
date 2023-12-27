import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

import "./App.css";

import Schedule from "./Pages/Schedule/SchedulePage";

const Layout = () => {
  return (
    <>
      <div className="App">
        <div className="container">
          <Schedule />
        </div>
      </div>

      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // { path: '/', element: <Schedule /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
