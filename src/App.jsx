import Background from "./component/Navbar/BackgroundSection";
import Navbar from "./component/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="relative min-h-screen">
        <div className="w-full h-full">
          <Background />
        </div>
        <div className="relative z-10">
          <Navbar />
        </div>
      </div>
    </>
  );
}

export default App;
