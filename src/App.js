import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

import "./App.css";

import Schedule from "./Pages/Schedule/SchedulePage";
import { useState } from "react";
import { Context } from "./Context/Context";

const Layout = () => {
  const [dates,setDates] = useState([1,2,3,4,5,6,7]);

  return (
    <>
      <div className="App">
        <div className="container">
          <Context.Provider value={{dates:dates,setDates}}>
          <Schedule />

          </Context.Provider>
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
