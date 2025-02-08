import AnimatedBlux from "./components/AnimatedBlux";
import blux from "/blux.svg";

function App() {
  return (
    <div className="flex flex-col justify-between items-center !bg-[#FFCDCD] h-screen w-screen font-mono">
      <div className="h-[72px] center">
        <img src={blux} alt="blux" />
      </div>

      <div className="flex-grow flex items-center">
        <AnimatedBlux />
      </div>

      <div className="w-[239px] text-center text-[#0D1292] text-[22px] font-medium pb-20 uppercase">
        <p>Stay tuned, it’s almost here.</p>
      </div>
    </div>
  );
}

export default App;
