import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -3,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function Card({
  imageSrc,
  colorA,
  colorB,
  title,
  owner,
  description,
  isThird,
}) {
  const [showText, setShowText] = useState(false);
  const background = `linear-gradient(306deg, ${colorA}, ${colorB})`;

  return (
    <motion.div
      className={`relative md:w-3/4 w-full md:h-96 h-56 m-5 mb-8 md:mb-12 flex items-center justify-center cursor-pointer ${
        isThird ? "special-background-class" : ""
      }`}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      onClick={() => setShowText(!showText)}
    >
      <div
        className="absolute w-full h-full rounded-2xl"
        style={{ background }}
      />
      <motion.div
        className="absolute w-[100%] md:h-[90%] h-[85%] flex-col bg-white rounded-2xl flex items-center justify-center shadow-lg"
        variants={cardVariants}
      >
        <h2 className="text-lg text-start font-['NeueMontreal-Regular'] font-zinc-900 font-bold mb-2">
          {title}
        </h2>
        <img
          src={imageSrc}
          alt={title}
          className="md:max-w-[85%] max-w-[97%] md:max-h-[85%] max-h-[100%] rounded-lg"
        />
      </motion.div>
      <AnimatePresence>
        {showText && (
          <motion.div
            className="absolute md:w-[65%] gap-y-5 h-auto overflow-y-auto backdrop-blur-sm font-['Neue_Montreal'] bg-[#ffffff71] text-[#000000] shadow-2xl rounded-lg flex flex-col justify-between p-1"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={textVariants}
          >
            <div className="flex flex-row items-center">
              <img src={imageSrc} className="w-10 h-10 rounded-full" />
              <h2 className="text-lg text-start p-2 font-thin mb-2">{title}</h2>
            </div>

            <div className="flex flex-col gap-y-5 justify-between h-full">
              <div>
                <p className="text-sm text-start">{description}</p>
              </div>
              <div className="mt-auto text-end px-2">
                <p className="text-xs">{owner}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Gallery({ images }) {
  const [cardsPerPage, setCardsPerPage] = useState(3); // Default to 3 cards per page
  const [currentPage, setCurrentPage] = useState(1);

  // Adjust cards per page based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setCardsPerPage(8); // Show 8 cards per page on smaller screens (mobile)
      } else {
        setCardsPerPage(3); // Default to 3 cards per page on larger screens
      }
    };

    handleResize(); // Call initially to set correct number of cards
    window.addEventListener("resize", handleResize); // Listen for resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up on component unmount
    };
  }, []);

  const totalPages = Math.ceil(images.length / cardsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => {
      const newPage = Math.max(prevPage - 1, 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return newPage;
    });
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => {
      const newPage = Math.min(prevPage + 1, totalPages);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return newPage;
    });
  };

  const currentCards = images.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );

  return (
    <div className="flex flex-col items-center w-full bg-white">
      <div className="flex flex-wrap justify-center items-center w-full">
        {currentCards.map(
          ({ id, image, colorA, colorB, title, owner, description }, index) => (
            <Card
              key={id}
              imageSrc={image}
              colorA={colorA}
              colorB={colorB}
              title={title}
              owner={owner}
              description={description}
              isThird={index === 2 && currentPage === 1} // Apply special class only on the third card of the first page
            />
          )
        )}
      </div>
      <div className="flex flex-col  items-center mt-16">
        <div className="inline-flex mt-2  xs:mt-0">
          <button
            onClick={handlePrevPage}
            className="flex items-center justify-center px-5 h-10 text-sm font-medium text-white bg-zinc-800 rounded-full hover dark dark dark dark:hover dark:hover"
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <button
            onClick={handleNextPage}
            className="flex items-center justify-center px-5 h-10 text-sm font-medium text-white bg-zinc-800 border-0 border-s border-gray-700 rounded-full hover dark dark dark dark:hover dark:hover"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
