import React from "react";

function Header() {
  return (
    <div data-cy="header-background" className="bg-[#16abf8] py-9 static">
      <div className="md:w-3/4 mx-auto">
        <h2 data-cy="header-title" className="text-2xl text-white uppercase">
          TO DO LIST APP
        </h2>
      </div>
    </div>
  );
}

export default Header;
