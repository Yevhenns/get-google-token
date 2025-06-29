import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

const CLIENTID = import.meta.env.VITE_CLIENTID as string;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={CLIENTID}>
      <App />
    </GoogleOAuthProvider>
  </StrictMode>
);
