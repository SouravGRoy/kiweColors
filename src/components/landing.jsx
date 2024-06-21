import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

export default function Landing() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-2 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl pt-32 sm:pt-24 lg:pt-32">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{" "}
              <a
                href="https://kiwemedia.vercel.app/"
                className="font-semibold text-indigo-600"
              >
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-extrabold font-shadows-into-light tracking- text-gray-900 sm:text-5xl ">
              50 Gorgeous Color Schemes From Award-Winning Websites
            </h1>
            <p className="mt-6 text-sm md:text-lg  md:leading-8 font-['NeueMontreal-Regular'] text-zinc-900">
              KiweColors stands as the offspring of Kiwe Media, continuing our
              legacy of innovation and creativity in the realm of visual
              aesthetics.
            </p>
            <div className="md:mt-10 flex items-center justify-center gap-x-6">
              <div className="flex items-center mt-5 md:mt-0">
                <motion.div
                  className="border-[1px] mr-3 font-thin rounded-full text-md border-white py-2 px-3 bg-black text-white relative overflow-hidden"
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <a
                    href="/contact"
                    style={{ position: "relative", zIndex: 10 }}
                  >
                    <motion.span
                      className="absolute inset-0 bg-white"
                      variants={{
                        rest: { scaleY: 0, originY: 0.5 },
                        hover: { scaleY: 1, originY: 0.5 },
                      }}
                      transition={{ ease: "easeInOut", duration: 1 }}
                      style={{ zIndex: 1 }}
                    />
                    <motion.span
                      className="relative z-10"
                      variants={{
                        rest: { color: "white" },
                        hover: { color: "black" },
                      }}
                      transition={{ ease: "easeInOut", duration: 1 }}
                    >
                      Start the project
                    </motion.span>
                  </a>
                </motion.div>
                <a
                  href="/contact"
                  className="w-9 h-9 flex items-center justify-center border-[1px] border-zinc-500 hover:text-black rounded-full hover:bg-gray-200 transition-colors duration-1000 transform hover:rotate-45"
                >
                  <span>
                    <FaArrowUpLong />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
