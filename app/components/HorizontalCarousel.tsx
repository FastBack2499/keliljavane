"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"

const cards = [
  { id: 1, title: "Card 1", description: "This is the first card." },
  { id: 2, title: "Card 2", description: "This is the second card." },
  { id: 3, title: "Card 3", description: "This is the third card." },
  { id: 4, title: "Card 4", description: "This is the fourth card." },
]

export default function HorizontalCarousel() {

  const [currentIndex, setCurrentIndex] = useState(0)

  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  const restartAutoScroll = () => {

    if (autoScrollRef.current) clearInterval(autoScrollRef.current)

    autoScrollRef.current = setInterval(() => {

      setCurrentIndex((prevIndex) =>
        prevIndex === cards.length - 1 ? 0 : prevIndex + 1
      )

    }, 10000)

  }

  useEffect(() => {

    restartAutoScroll()

    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current)
    }

  }, [])

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
    restartAutoScroll()
  }

  return (
    <div className="relative flex flex-col items-start justify-center">

      <div className="w-60 h-40 overflow-hidden flex items-center justify-center relative">

        <AnimatePresence mode="wait">

          <motion.div
            key={cards[currentIndex].id}
            className="absolute w-60 h-32 bg-black/35 text-white p-4 rounded-xl flex flex-col justify-normal shadow-lg"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100, transition: { duration: 0.4 } }}
            transition={{ type: "spring", stiffness: 70 }}
          >

            <div className="flex items-center justify-between">

              <h3 className="text-base font-bold">
                {cards[currentIndex].title}
              </h3>

            </div>

            <p className="text-sm">
              {cards[currentIndex].description}
            </p>

          </motion.div>

        </AnimatePresence>

      </div>

      <div className="flex space-x-1 pl-1">

        {cards.map((_, index) => (

          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-4 h-1 rounded-full hover:scale-105 transition-all duration-300 ${
              currentIndex === index ? "bg-gray-300 hover:w-7 w-6" : "bg-gray-500 hover:bg-gray-400 hover:w-5"
            } transition-all`}
          />

        ))}

      </div>

    </div>
  );
}
