import Footer from "./component/LowerContent/Footer";
import Home from "./component/MainContenet/Pages/Home/Home";
import Background from "./component/MainContenet/Pages/Navbar/BackgroundSection";
import Navbar from "./component/MainContenet/Pages/Navbar/Navbar";
import SlidingBackground from "./component/MainContenet/Pages/Navbar/SlidingBackground";
import Service from "./component/MainContenet/Pages/Service/Service";

function App() {
  return (
    <>
      <div className="relative min-h-screen">
        <div className="fixed inset-0">
          <SlidingBackground />
        </div>
        <div className="fixed inset-0">
          <Background />
        </div>
        <div className="relative z-10">
          <div className="flex flex-col min-h-screen">
            <nav className="w-full">
              <Navbar />
            </nav>
            <main className="flex-1">
              <Home />
            </main>
            <footer className="w-full">
              <Footer />
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
