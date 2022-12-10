import { RouterProvider } from "react-router-dom";
import router from "./components/Router/Routes/Routes";

function App() {
  return (
    <div className="max-w-7xl mx-auto text-white">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
