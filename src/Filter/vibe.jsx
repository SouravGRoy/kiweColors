import React, { useState } from "react";
import { motion } from "framer-motion";
import { uniqueVibes } from "../data";

function Vibe({ selectedVibe, onFilterChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (event) => {
    const { value, checked } = event.target;
    const updatedVibe = checked
      ? [...selectedVibe, value]
      : selectedVibe.filter((v) => v !== value);

    onFilterChange("vibe", updatedVibe);
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b px-4 font-['NeueMontreal-Regular'] border-gray-200 py-6">
      <h3 className="-my-3 flow-root">
        <div
          className="group relative w-full py-3 flex justify-between items-center text-left cursor-pointer"
          onClick={toggleOpen}
        >
          <span className="font-medium text-gray-900">Vibe</span>
          <span className="ml-6 flex items-center">
            {isOpen ? (
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v8a1 1 0 11-2 0V6a1 1 0 011-1z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </span>
        </div>
      </h3>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, overflow: "hidden" }}
        transition={{ duration: 0.5 }}
      >
        {isOpen && (
          <div className="pt-6">
            <div className="space-y-4">
              {uniqueVibes.map((vibe) => (
                <div className="flex items-center" key={vibe}>
                  <input
                    id={`vibe-${vibe}`}
                    name="vibe[]"
                    value={vibe}
                    type="checkbox"
                    checked={selectedVibe.includes(vibe)}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor={`vibe-${vibe}`}
                    className="ml-3 text-sm text-gray-600"
                  >
                    {vibe}
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default Vibe;
