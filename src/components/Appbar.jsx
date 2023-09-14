import React from "react";
import { useNavigate } from "react-router-dom";

const Appbar = () => {
  const logout = () => {
    sessionStorage.clear();
    reloadPage();
  };

  const reloadPage = () => {
    // Check if we are running in a browser environment (not in Jest)
    if (typeof window !== "undefined") {
      window.location.reload(true);
    }
  };
  
  return (
    <div className="flex w-full relative justify-center items-center h-16 font-semibold text-xl text-gray-800  border-b-2">
      SpaceX Capsules
      <button
        onClick={() => logout()}
        className="px-4 py-2 bg-red-400 rounded-md hover:bg-red-600 absolute right-5"
      >
        Logout
      </button>
    </div>
  );
};

export default Appbar;
