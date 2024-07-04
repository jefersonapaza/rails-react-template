// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"


import React from "react";
import ReactDOM from "react-dom/client";

import HelloWorld from "./components/HelloWorld";

document.addEventListener("DOMContentLoaded", () => {
  const element = document.getElementById("hello-react");
  if (element) {
    const root = ReactDOM.createRoot(element);
    root.render(<HelloWorld />);
  }
});