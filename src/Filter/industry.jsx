import React from "react";
import { uniqueIndustries } from "../data";

function Industry({ selectedIndustry, onFilterChange }) {
  const handleChange = (event) => {
    const { value, checked } = event.target;
    const updatedIndustry = checked
      ? [...selectedIndustry, value]
      : selectedIndustry.filter((industry) => industry !== value);

    onFilterChange("industry", updatedIndustry);
  };

  return (
    <div className="border-b px-4 font-['NeueMontreal-Regular'] border-gray-200 py-6">
      <h3 className="-my-3 flow-root">
        <div className="group relative w-full py-3 flex justify-between items-center text-left">
          <span className="font-medium text-gray-900">Category</span>
        </div>
      </h3>
      <div className="pt-6">
        <div className="space-y-4">
          {uniqueIndustries.map((industry) => (
            <div className="flex items-center" key={industry}>
              <input
                id={`industry-${industry}`}
                name="industry[]"
                value={industry}
                type="checkbox"
                checked={selectedIndustry.includes(industry)}
                onChange={handleChange}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor={`industry-${industry}`}
                className="ml-3 text-sm text-gray-600"
              >
                {industry}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Industry;
