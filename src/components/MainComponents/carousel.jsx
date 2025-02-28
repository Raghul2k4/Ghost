import img1 from "../../assets/carousel/uwp4618640.png";
import img2 from "../../assets/carousel/wp14833816-silent-hill-2-wallpapers.webp";
import img3 from "../../assets/carousel/wp7954352-black-myth-wukong-wallpapers.jpg";
import { useState, useEffect, useCallback } from "react";

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);

  const slides = [
    {
      img: img1,
      title: "Unknown 2",
      description: "A legendary RPG blending epic storytelling with iconic characters.",
      buttonText: "PLAY NOW",
      link: "#",
    },
    {
      img: img2,
      title: "Silent Hill 2",
      description: "A psychological horror masterpiece exploring guilt and grief.",
      buttonText: "PLAY NOW",
      link: "#",
    },
    {
      img: img3,
      title: "Black Myth Wukong",
      description: "A visually stunning action RPG inspired by Chinese mythology.",
      buttonText: "PLAY NOW",
      link: "#",
    },
  ];

  const handleNext = useCallback(() => {
    setVisible(false);
    setTimeout(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setVisible(true);
    }, 300);
  }, [slides.length]);

  const handlePrev = () => {
    setVisible(false);
    setTimeout(() => {
      setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setVisible(true);
    }, 300);
  };

  useEffect(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    const autoSlide = setInterval(handleNext, 5000);
    return () => clearInterval(autoSlide);
  }, [handleNext]);

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-gray-900 to-black overflow-hidden">
      {/* Image */}
      <img
        src={slides[current].img}
        alt={slides[current].title}
        className="w-full h-full object-cover transition-opacity duration-300"
      />

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 w-full flex justify-between transform -translate-y-1/2 px-6 md:px-12">
        <button onClick={handlePrev} className="bg-gray-800 p-3 rounded-full hover:bg-gray-700">
          ◀
        </button>
        <button onClick={handleNext} className="bg-gray-800 p-3 rounded-full hover:bg-gray-700">
          ▶
        </button>
      </div>

      {/* Caption and Button */}
      <div className="absolute top-1/2 left-10 md:left-20 w-5/6 md:w-1/3 transform -translate-y-1/2">
        <h3 className={`text-2xl md:text-3xl text-white ${visible ? "opacity-100" : "opacity-0"}`}>
          {slides[current].title}
        </h3>
        <p className={`text-gray-300 ${visible ? "opacity-100" : "opacity-0"}`}>
          {slides[current].description}
        </p>
        <a href={slides[current].link} className="bg-green-500 px-6 py-2 rounded-md hover:bg-green-600">
          {slides[current].buttonText}
        </a>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 w-full flex justify-center gap-2">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full cursor-pointer ${current === index ? "bg-green-500" : "bg-gray-600"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
