import React, { useEffect, useRef } from "react";
import Loading from "./Loading";
import { useGetCapsuleQuery } from "../api/ApiSlice";

const CardModal = ({ id, onClose }) => {

  const {data, erorr, isLoading} = useGetCapsuleQuery(id)
  // Create a reference for the modal content
  const modalRef = useRef();

  // Close the modal when clicking outside of it
  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  // Add an event listener when the component mounts
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 flex p-4 items-center justify-center z-50 overflow-x-hidden overflow-y-auto bg-black bg-opacity-80"
      onClick={onClose} // Close the modal when clicking the backdrop
    >
      <div
        className="relative p-4 max-w-md mx-auto my-6 bg-white text-black rounded-lg shadow-lg"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()} // Prevent clicks on the modal from closing it
      >
        {/* Modal content */}
        {isLoading? <Loading/>: data? <div className="rounded-lg p-4">
          {/* Close button */}
          <button
            className="absolute top-0 right-0 p-2 m-2"
            onClick={onClose}
            aria-label="Close Modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Modal content */}
          <div className="p-4">
            <h2 className="text-xl font-semibold" aria-label="Capsule Serial">
              {data.capsule_serial}
            </h2>
            <p className="text-gray-600 mt-2" aria-label="Capsule ID">
              Capsule ID: {data.capsule_id}
            </p>
            <p className="text-gray-600 mt-2" aria-label="Status">
              Status: {data.status}
            </p>
            <p className="text-gray-600 mt-2" aria-label="Original Launch">
              Original Launch: {data.original_launch}
            </p>
            <p className="text-gray-600 mt-2" aria-label="Type">
              Type: {data.type}
            </p>
            <p className="text-gray-600 mt-2" aria-label="Details">
              Details: {data.details}
            </p>

            {/* Display modal content here */}
            {data.missions && data.missions.length > 0 && (
              <>
                <h3 className="text-lg font-semibold mt-4">Missions:</h3>
                <ul
                  className="list-disc pl-6 mt-2"
                  aria-label="Missions"
                >
                  {data.missions.map((mission, index) => (
                    <li key={index}>
                      <span className="text-gray-600" aria-label="Mission Name">
                        {mission.name}
                      </span>{" "}
                      (Flight {mission.flight})
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>: <p>Something Went wrong</p>}
      </div>
    </div>
  );
};

export default CardModal;
