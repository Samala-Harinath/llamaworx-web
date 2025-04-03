'use client';
import React, { useState, useEffect } from "react";
import { LuArrowDown, LuArrowUp } from "react-icons/lu";

const ScrollToggle = () => {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const updateScrollState = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.body.scrollHeight;
      const clientHeight = window.innerHeight;

      if (scrollTop + clientHeight >= scrollHeight - 5) {
        setIsBottom(true);
      } else {
        setIsBottom(false);
      }
    };

    window.addEventListener("scroll", updateScrollState);

    return () => {
      window.removeEventListener("scroll", updateScrollState);
    };
  }, []);

  const handleScroll = () => {
    if (isBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleScroll}
      className="fixed bottom-12 right-7 bg-[#1B55F5] text-white p-2 rounded-[10px] shadow-lg z-40 outline-none"
    >
      {isBottom ? <LuArrowUp /> : <LuArrowDown />}
    </button>
  );
};

export default ScrollToggle;
