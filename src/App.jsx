import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Form from "./components/Form";
import Resume from "./components/Resume";
import "./App.css";

function App() {
  const root = createRoot(document.getElementById("root"));
  root.render(
    <StrictMode>
      <Resume />
    </StrictMode>,
  );
}

export default App;
