import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import JoinGame from "./routes/JoinGame";
import NewGame from "./routes/NewGame";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="joingame" element={<JoinGame />} />
      <Route path="newgame" element={<NewGame />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
