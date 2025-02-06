import React, { useState, useEffect, useCallback } from "react";
import Footer from "./component/LowerContent/Footer";
import Home from "./component/MainContenet/Pages/Home/Home";
import Background from "./component/MainContenet/Pages/Navbar/BackgroundSection";
import Navbar from "./component/MainContenet/Pages/Navbar/Navbar";
import SlidingBackground from "./component/MainContenet/Pages/Navbar/SlidingBackground";
import Service from "./component/MainContenet/Pages/Service/Service";

const sections = [
  { id: 0, component: <Home />, title: "Home" },
  { id: 1, component: <Service />, title: "Services" },
  { id: 2, component: <Home />, title: "About" },
  { id: 3, component: <Service />, title: "Portfolio" },
  { id: 4, component: <Home />, title: "Contact" },
];

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleSectionChange = useCallback(
    (newIndex) => {
      if (newIndex >= 0 && newIndex < sections.length && !isScrolling) {
        setIsScrolling(true);
        setCurrentSection(newIndex);

        setTimeout(() => {
          setIsScrolling(false);
        }, 800);
      }
    },
    [isScrolling]
  );

  useEffect(() => {
    const handleWheel = (event) => {
      event.preventDefault();
      if (!isScrolling) {
        handleSectionChange(
          event.deltaY > 0
            ? Math.min(currentSection + 1, sections.length - 1)
            : Math.max(currentSection - 1, 0)
        );
      }
    };

    const wheelOptions = { passive: false };
    window.addEventListener("wheel", handleWheel, wheelOptions);

    return () => {
      window.removeEventListener("wheel", handleWheel, wheelOptions);
    };
  }, [currentSection, isScrolling, handleSectionChange]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Fixed Background */}
      <div className="fixed inset-0 z-0">
        <SlidingBackground />
        <Background />
      </div>

      {/* Main Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header at the Top */}
        <header className="fixed top-0 left-0 right-0 z-20">
          <Navbar
            sections={sections}
            currentSection={currentSection}
            onSectionChange={handleSectionChange}
          />
        </header>

        {/* Content Centered */}
        <main className="flex-1 flex items-center justify-center relative overflow-hidden pt-16">
          {sections.map((section, index) => (
            <section
              key={section.id}
              className={`
                absolute w-full h-full flex items-center justify-center
                transition-all duration-800 ease-in-out
                ${
                  currentSection === index
                    ? "opacity-100 translate-y-0"
                    : currentSection > index
                    ? "-translate-y-full opacity-0"
                    : "translate-y-full opacity-0"
                }
              `}
            >
              {section.component}
            </section>
          ))}
        </main>

        {/* Footer */}
        <footer className="fixed bottom-0 left-0 right-0 z-20">
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;