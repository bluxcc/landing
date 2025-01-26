import AnimatedBlux from "./components/AnimatedBlux";
import blux from "/blux.png";

function App() {
  return (
    <div className="flex flex-col py-8 justify-between items-center !bg-[#FFCDCD] h-screen w-screen font-mono">
      <div>
        <img src={blux} alt="blux" />
      </div>

      <div className="flex-grow flex items-center">
        <AnimatedBlux />
      </div>

      <div className="w-[239px] text-center text-[#0D1292] text-[22px] font-medium">
        <p>Trust the Power of Simplicity.</p>
      </div>
    </div>
  );
}

export default App;
