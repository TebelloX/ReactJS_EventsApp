import React from "react";

function App() {
  const title = React.createElement("h1", {}, "Revents no JSX");
  const div = React.createElement("div", { className: "App" }, title);
  return div;
}

export default App;
