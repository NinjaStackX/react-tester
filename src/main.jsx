// main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // للمتصفح نستخدم BrowserRouter
import { UserProvider } from "./context/UserContext.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <BrowserRouter basename="/react-tester">
        <App />
      </BrowserRouter>
    </UserProvider>
  </StrictMode>
);
