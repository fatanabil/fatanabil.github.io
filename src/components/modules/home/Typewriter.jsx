"use client";
import { useEffect, useState } from "react";

const Typewriter = () => {
  const text1 = "Hi, I'm Fata Nabil Fikri,";
  const text2 = "a ";
  const text3 = "Fullstack";
  const errorText3 = "Fullstack";
  const correctText3 = "Frontend";
  const text4 = " Developer.";
  const errorIndex = text3.indexOf(errorText3);
  const speed = 100;

  const [displayedText1, setDisplayedText1] = useState("");
  const [displayedText2, setDisplayedText2] = useState("");
  const [displayedText3, setDisplayedText3] = useState("");
  const [displayedText4, setDisplayedText4] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [count, setCount] = useState(0);
  const [part, setPart] = useState(1);

  useEffect(() => {
    const handleTyping = () => {
      if (part === 1) {
        if (index < text1.length) {
          setDisplayedText1((prev) => prev + text1[index]);
          setIndex((prev) => prev + 1);
        } else if (index === text1.length) {
          setPart(2);
          setIndex(0);
        }
      } else if (part === 2) {
        if (index < text2.length) {
          setDisplayedText2((prev) => prev + text2[index]);
          setIndex((prev) => prev + 1);
        } else if (index === text2.length) {
          setPart(3);
          setIndex(0);
        }
      } else if (part === 3) {
        if (index < text3.length && !isDeleting && !isCorrect) {
          setDisplayedText3((prev) => prev + text3[index]);
          setIndex((prev) => prev + 1);
        } else if (isDeleting & (index > errorIndex)) {
          setDisplayedText3((prev) => prev.slice(0, -1));
          setIndex((prev) => prev - 1);
        } else if (index === errorIndex && isDeleting) {
          setIsDeleting(false);
          setIsCorrect(true);
          setIndex(errorIndex);
        } else if (isCorrect && index < errorIndex + correctText3.length) {
          setDisplayedText3((prev) => prev + correctText3[index - errorIndex]);
          setIndex((prev) => prev + 1);
        } else if (index === correctText3.length) {
          setPart(4);
          setIndex(0);
        }
      } else if (part === 4) {
        if (index < text4.length) {
          setDisplayedText4((prev) => prev + text4[index]);
          setIndex((prev) => prev + 1);
        } else if (index === text4.length) {
          setIsCompleted(true);
        }
      }
    };

    const timeoutId = setTimeout(handleTyping, speed);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [
    index,
    speed,
    isDeleting,
    isCorrect,
    errorIndex,
    count,
    part,
    correctText3,
  ]);

  useEffect(() => {
    let timeoutId;
    if (index === errorIndex + errorText3.length && !isCorrect) {
      timeoutId = setTimeout(() => {
        setIsDeleting(true);
      }, 500);
    }

    return () => clearTimeout(timeoutId);
  }, [index, errorIndex, errorText3.length, isCorrect]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (isCompleted) {
        setDisplayedText1("");
        setDisplayedText2("");
        setDisplayedText3("");
        setDisplayedText4("");
        setPart(1);
        setIndex(0);
        setCount((prev) => prev + 1);
        setIsDeleting(false);
        setIsCorrect(false);
        setIsCompleted(false);
      }
    }, 10000);

    return () => clearTimeout(timeoutId);
  }, [isCompleted]);

  return (
    <>
      <h2 className="text-dark-cerulean text-3xl">
        {displayedText1}
        {part === 1 && <span className="cursor-blink text-3xl"></span>}
      </h2>
      <h1 className="text-dark-cerulean text-6xl">
        <span className="text-5xl">
          {displayedText2}
          {part === 2 && <span className="cursor-blink text-6xl"></span>}
        </span>
        <span className="font-semibold ">
          {displayedText3}{" "}
          {part === 3 && <span className="cursor-blink text-6xl"></span>}
        </span>
        <span className="font-semibold text-ocean-green">
          {displayedText4}{" "}
          {part === 4 && <span className="cursor-blink text-6xl"></span>}
        </span>
      </h1>
    </>
  );
};

export default Typewriter;
