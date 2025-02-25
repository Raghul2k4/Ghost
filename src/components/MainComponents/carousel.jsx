import img1 from "../../assets/carousel/uwp4618640.png";
import img2 from "../../assets/carousel/wp14833816-silent-hill-2-wallpapers.webp";
import img3 from "../../assets/carousel/wp7954352-black-myth-wukong-wallpapers.jpg";
import { useState, useEffect } from "react";

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);

  const slides = [
    {
      img: img1,
      title: "unknown 2",
      description:
        "A legendary RPG blending epic storytelling with iconic characters. Emotional depth, tactical combat, and a timeless journey.",
      buttonText: "PLAY NOW",
      link: "#",
    },
    {
      img: img2,
      title: "silent hill 2",
      description:
        "A psychological horror masterpiece exploring guilt and grief. Eerie atmospheric design, haunting soundtrack, and a chilling descent.",
      buttonText: "PLAY NOW",
      link: "#",
    },
    {
      img: img3,
      title: "black myth wokong",
      description:
        "A visually stunning action RPG inspired by Chinese mythology. Dynamic combat, breathtaking visuals, and an immersive journey.",
      buttonText: "PLAY NOW",
      link: "#",
    },
  ];

  const handlePrev = () => {
    setVisible(false);
    setTimeout(() => {
      setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setVisible(true);
    }, 300); // Reduced animation time
  };

  const handleNext = () => {
    setVisible(false);
    setTimeout(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setVisible(true);
    }, 300); // Reduced animation time
  };

  useEffect(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    const autoSlide = setInterval(() => handleNext(), 5000);
    return () => clearInterval(autoSlide);
  }, [current]);

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
        <button
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="bg-gray-800 bg-opacity-70 text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition-colors duration-300"
        >
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M15 6 L9 12 L15 18" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button
          onClick={handleNext}
          aria-label="Next Slide"
          className="bg-gray-800 bg-opacity-70 text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition-colors duration-300"
        >
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M9 6 L15 12 L9 18" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Caption and Button */}
      <div className="absolute top-1/2 left-10 md:left-20 w-5/6 md:w-1/3 transform -translate-y-1/2">
        <h3
          className={`font-semibold text-2xl md:text-3xl bg-black bg-opacity-60 text-white px-4 py-2 rounded-md transition-all duration-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {slides[current].title}
        </h3>
        <p
          className={`mt-4 text-sm md:text-base text-gray-300 px-4 py-2 transition-all duration-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {slides[current].description}
        </p>
        <a
          href={slides[current].link}
          className={`inline-block mt-6 bg-green-500 hover:bg-green-600 text-white text-sm md:text-base px-6 py-2 rounded-md transition-all duration-500 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          {slides[current].buttonText}
        </a>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 w-full flex justify-center gap-2">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full cursor-pointer transition-all duration-300 ${
              current === index ? "bg-green-500" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;