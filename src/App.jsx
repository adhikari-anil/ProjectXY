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
        <SlidingBackground />
        <div className="w-full h-full">
          <Background />
        </div>
        <div className="relative z-10">
          <Navbar />
        </div>
        <main>
          <Home />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;