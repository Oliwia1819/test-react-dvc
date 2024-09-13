import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import EditUsers from "./Screen/EditUsers";


const router = createBrowserRouter([
  {
    path: "/",
    element: <EditUsers />
  },
]);


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
