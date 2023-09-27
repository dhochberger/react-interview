import { FunctionComponent } from "react";
import "./App.css";
import Home from "./pages/Home";

const App: FunctionComponent = () => {
  return (
    <div style={{ height: "100vh", backgroundColor: "grey" }}>
      <Home />
    </div>
  );
};

export default App;
