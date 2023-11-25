import { RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { routers } from "./routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <RouterProvider router={routers} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        toastStyle={{ fontSize: "0.8rem", textAlign: "left" }}
      />
    </>
  );
}

export default App;
