import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import { images } from "../data";
import Vibe from "../Filter/vibe";
import Color from "../Filter/color";
import Industry from "../Filter/industry";
import Gallery from "./gallary";
import Animation from "./animation";

export default function Filter() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedVibe, setSelectedVibe] = useState([]);
  const [selectedColor, setSelectedColor] = useState([]);
  const [selectedIndustry, setSelectedIndustry] = useState([]);

  const handleFilterChange = (filterType, value) => {
    switch (filterType) {
      case "vibe":
        setSelectedVibe(value);
        break;
      case "color":
        setSelectedColor(value);
        break;
      case "industry":
        setSelectedIndustry(value);
        break;
      default:
        break;
    }
  };

  const filteredImages = images.filter((image) => {
    return (
      (selectedVibe.length === 0 || selectedVibe.includes(image.vibe)) &&
      (selectedColor.length === 0 ||
        selectedColor.some((color) => image.color.includes(color))) &&
      (selectedIndustry.length === 0 ||
        selectedIndustry.includes(image.industry))
    );
  });

  return (
    <div className="bg-white">
      <div>
        {mobileFiltersOpen && (
          <div
            className="relative z-40 lg:hidden"
            role="dialog"
            aria-modal="true"
          >
            <div
              className="fixed inset-0 bg-black bg-opacity-25 transition-opacity"
              onClick={() => setMobileFiltersOpen(false)}
            />
            <div className="fixed inset-0 z-40 flex">
              <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition-transform transform translate-x-0">
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-['FoundersGrotesk'] font-medium text-gray-900">
                    Filters
                  </h2>
                  <button
                    type="button"
                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <form className="mt-4 border-t border-gray-200">
                  <div id="mobile-filters-placeholder">
                    <Vibe
                      selectedVibe={selectedVibe}
                      onFilterChange={handleFilterChange}
                    />
                    <Color
                      selectedColor={selectedColor}
                      onFilterChange={handleFilterChange}
                    />
                    <Industry
                      selectedIndustry={selectedIndustry}
                      onFilterChange={handleFilterChange}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-10 md:pt-24">
            <h1 className="text-5xl tracking-wider font-shadows-into-light font-bold text-gray-900">
              New Arrivals
            </h1>
            <div className="flex items-center">
              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              <form className="hidden lg:block">
                <div id="desktop-filters-placeholder">
                  <Vibe
                    selectedVibe={selectedVibe}
                    onFilterChange={handleFilterChange}
                  />
                  <Color
                    selectedColor={selectedColor}
                    onFilterChange={handleFilterChange}
                  />
                  <Industry
                    selectedIndustry={selectedIndustry}
                    onFilterChange={handleFilterChange}
                  />
                </div>
                <div className="absolute w-full -translate-y-2/4 mt-96 -translate-x-20">
                  <Animation />
                </div>
              </form>
              <div className="lg:col-span-3">
                <Gallery images={filteredImages} />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
