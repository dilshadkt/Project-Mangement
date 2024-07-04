import React from "react";

const Header = ({ heading, value }: { heading: string; value?: number }) => {
  return (
    <div className="text-gray-800 flex">
      <h3 className="medium-40 ">{heading}</h3>
      {value && (
        <span className="border rounded-lg regular-40 ml-9 px-3 ">{value}</span>
      )}
    </div>
  );
};

export default Header;
