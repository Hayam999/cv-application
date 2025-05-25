import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import General from "./components/General";
import "./App.css";

function App() {
  const root = createRoot(document.getElementById("root"));
  root.render(
    <StrictMode>
      <General />
    </StrictMode>,
  );
}

export default App;
