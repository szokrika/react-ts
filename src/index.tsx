import React from "react";
import { render } from "react-dom";
import Box from "./Box";

const App = () => {
  return (
    <div>
      <Box width="400" padding="50">
        BOX Here
      </Box>
    </div>
  );
};

render(<App />, document.getElementById("app"));
