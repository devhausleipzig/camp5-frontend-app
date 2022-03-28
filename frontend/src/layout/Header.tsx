import React from "react";
import

function MyComp() {
  // Good! Multiline wrapped in ( ... )
  // also has a single top level node.
  return ( // <- (
    <div>
      <h1>Hello</h1>
      <p>World</p>
    </div>
  ) // <- )
}

export default MyComp