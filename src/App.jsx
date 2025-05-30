import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routing";
import "locomotive-scroll/dist/locomotive-scroll.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
