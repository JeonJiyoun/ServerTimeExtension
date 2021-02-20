// index.tsx
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "../public/root.css";

/** Chrome Extension 의 Content Script
 * local 일 때는 주석하기
 *
 */
const app = document.createElement("div");
app.id = "my-extension";
document.body.appendChild(app);
app.style.display = "none";

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "click") {
    toggle();
  }
});

function toggle() {
  if (app.style.display === "none") {
    app.style.display = "block";
  } else {
    app.style.display = "none";
  }
}

/**
 * local => document.getElementById("my-extension")
 * extension => app
 */

ReactDOM.render(<App />, app);
