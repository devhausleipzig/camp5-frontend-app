import React from "react";


function NavBar() {
  // Good! Multiline wrapped in ( ... )
  // also has a single top level node.
  return ( // <- (
    <div>
      <div className="sticky top-0 w-1/3 bg-green-500 p-5 flex flex-row space-x-12 justify-center justify-self-center m-auto drop-shadow">
        <nav className="flex space-x-4 text-white text-shadow">basket
         </nav>
      <nav className="flex space-x-4 text-white">profile
         </nav>
      </div>
    </div>
  ) // <- )
}

export default NavBar