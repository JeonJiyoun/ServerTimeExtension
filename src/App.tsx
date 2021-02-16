// App.tsx
import * as React from "react";
import Draggable from "react-draggable";
import RootContainer from "./containers/RootContainer";

function App() {
  return (
    <Draggable defaultPosition={{ x: 0, y: -100 }}>
      <RootContainer />
    </Draggable>
  );
}

export default App;
