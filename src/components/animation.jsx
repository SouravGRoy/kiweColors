import React, { useState, useRef, useEffect } from "react";
import { motion, useCycle } from "framer-motion";

const positions = [
  { x: 0, y: 0 },
  { x: 100, y: 0 },
  { x: 0, y: 200 },
  { x: 200, y: 0 },
  { x: 0, y: -200 },
];

const cubeVariants = {
  initial: (i) => positions[i],
  animate: (i) => ({
    ...positions[i],
    transition: { type: "spring", stiffness: 300, damping: 20 },
  }),
};

const Animation = () => {
  const [positionIndex, cyclePositionIndex] = useCycle(0, 1, 2, 3, 4);
  const [isInsideTarget, setIsInsideTarget] = useState(false);
  const targetRef = useRef(null);
  const cubeRef = useRef(null);

  useEffect(() => {
    const handleIntersection = () => {
      if (targetRef.current && cubeRef.current) {
        const targetRect = targetRef.current.getBoundingClientRect();
        const cubeRect = cubeRef.current.getBoundingClientRect();

        if (
          cubeRect.left >= targetRect.left &&
          cubeRect.right <= targetRect.right &&
          cubeRect.top >= targetRect.top &&
          cubeRect.bottom <= targetRect.bottom
        ) {
          setIsInsideTarget(true);
        } else {
          setIsInsideTarget(false);
        }
      }
    };

    const observer = new MutationObserver(handleIntersection);
    observer.observe(document.body, {
      attributes: true,
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <div ref={targetRef} className="bg-black text-white py-44 ">
        <h1 className="px-4">Can't touch me</h1>
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          className="absolute"
        >
          <motion.line
            x1="10"
            y1="10"
            x2="180"
            y2="10"
            stroke="white"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
          />
        </svg>
      </div>

      <div className="px-48 flex space-x-4 relative">
        <div>
          <motion.div
            ref={cubeRef}
            className={`w-16 h-16 rounded-full cursor-pointer ${
              isInsideTarget ? "bg-white" : "bg-black"
            }`}
            custom={positionIndex}
            variants={cubeVariants}
            initial="initial"
            animate="animate"
            onHoverStart={() => cyclePositionIndex()}
          />
        </div>

        <motion.div
          ref={cubeRef}
          className={`w-16 h-16 rounded-full cursor-pointer ${
            isInsideTarget ? "bg-white" : "bg-black"
          }`}
          custom={positionIndex}
          variants={cubeVariants}
          initial="initial"
          animate="animate"
          onHoverStart={() => cyclePositionIndex()}
        />
      </div>
    </div>
  );
};

export default Animation;
