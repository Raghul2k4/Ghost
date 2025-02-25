import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import "../src/index.css";
import { BrowserRouter } from "react-router-dom"; // If you want to use routing

const rootElement = document.getElementById('root'); // Ensure this matches the id in index.html
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
} else {
  console.error("Root element not found.");
}
