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
        <div className="relative inset-0">
          <Background />
        </div>
        <div className="flex flex-col gap-5 z-10 w-full">
          <header>
            <Navbar />
          </header>
          <main className="flex-1 w-full flex flex-col overflow-y-auto snap-y snap-mandatory">
            <section className="snap-start min-h-screen flex items-center justify-center">
              <Home />
            </section>
            <section className="snap-start min-h-screen flex items-center justify-center">
              <Service />
            </section>
          </main>
          <footer className="w-full">
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
