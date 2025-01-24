import React, { useState, useEffect } from "react";

const SlidingBackground = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    "https://media-hosting.imagekit.io//e26531e8c6424a03/slidingBackground1.avif?Expires=1832258136&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=fqH0mnQ-~N78UTbWwwV~9kJYv6fDBSHaltR~v5JXKnXaVWz1h1Dg--II7QwCSScHxDUfBCnnk4LVwxbADzU9OZRzN0yBpHCcCmv8DkSUOpf4qo2hWjIIJsUK0j8r~oqt1-drDCgdU7DGNoQTf22pdDbFPPUQIv94dxtL1BoQ8si7my6dDR8~3xiBWF2xomXZ1qyy1PQZsP514XQ2msZwWuQPA5q1a5wXOOAzLjr2ZXdBK1t857CCzn62DsXQoLI33aXOs8TnKhz8bITNf7qANTxaH2eE3AP5Hy9HjOB9AnpJA8Rx6ddEZSzYjXhuvBneMyJz-rmhs9NsPsq5gVBP1g__",
    "https://media-hosting.imagekit.io//2b4acc05ad084f4e/slidingBackground2.jpg?Expires=1832258136&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=lRseiQ~0aaleOh2UMad9rgZx3hJNHTDutLpvfiaRnotJg9NilEBpcF2O0ji0spsRBaCSpnkUaWQkOgCMKUwY94JTF8O2fc342Qobuq7gqRDEXBZyWOgW-DKvg~jgop~f1PKj~hz7llIUGjziTZx5m1qgZ8C~ImfSRGuHyQE63vX5gwgJbQSaFlIGnpfI4mug3Wi3WbgTz94O4-YKnhIzN1aIoi5LZLpGIxl4vPW4bRlv5Q3q3Yz8aBoAJfPBk9WmuBrK5k7Cr3p7aI1zpJ0uxoRfzMZJ5DpFTK1h4Dzdinob1IYubNvDsVFZ76sVEXpf~V02ETsxmcz7gcABiC5Jqg__",
    "https://media-hosting.imagekit.io//aa47f1a3f0084f10/slidingBackground3.avif?Expires=1832258136&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=LUEGwjaa5GKfNb-ZifU0kRfAGXgZQ111rYA6T0oFqkvpClE4E2ibfKHi~HFIyOd5notp7qeVwWa0eTf5xJCcI3eqGw2HfNpZkpxdcYF-G-nUkleawARwTcUdsgKx0gxRzdf3Oj1i6WVDpIrn8uMv9MjGghPfXJgQmY-W13eXbBP6b2nDKLHscWV8VA6nUjldfKNdWEUBL7eZdXLnu8cNejt~1bjyza1mbaknZ8j~Cy-jSCT5w5rPqEYIu00EKWFWQPvOPG~wnW~Fs42U2X34Ttrr8rfMZogminB4QCXLq1AX-kH8M4TM8DzjG5ph7Cwr8TDTEKmL3acK6c4HAiK3Xw__",
    "https://media-hosting.imagekit.io//62ae108aca4546cd/slidingBackground4.jpg?Expires=1832258136&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=JL5wfZfryM2FrGvVuR15ReTvkyVWQOzrOHYODEbyYQKIfpjC7V1VaFrVU6D9LEcDXnUTIGBlCg-Bk5YQH94D-pjeiPiv5hDUqZ~tDK6kkzP89dyost1agS1BDG-yKWt01G0Ne2HZ9-mFpH~3uoEaHRdGeIv~UhrTXtQ6piEdVrlXmjXWSIxehMexwhqdeVcZq0e0zofyrbekV3Rt2KOB8gtB8uEXy3wCGRqHWjjINxG1kEuhR4lFI7-Tg4ffIH~Wtg0WG-m0Iou5JT1Qxsd5B5jsCfmmVtUEDzaQXb~j3wOREGEK-fmeFqZpa6KotJMO1J-PiSbTrKGMdu2xOB7wCg__",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full">
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat`}
          style={{
            backgroundImage: `url(${image})`,
            opacity: currentImageIndex === index ? 1 : 0,
            zIndex: -1,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-black/50" /> {/* Optional overlay */}
    </div>
  );
};

export default SlidingBackground;