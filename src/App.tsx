import blux from "/blux.svg";
import verified from "/verified.svg";
import arrow from "/arrow_forward.svg";
import InteractiveBox from "./components/InteractiveBox";

function App() {
  return (
    <div className="flex flex-col justify-between !bg-white font-medium text-[#0C1083] py-[17px] px-20 h-screen w-screen">
      <div className="h-[114px] font-manrope flex w-full justify-between items-end py-[18px]">
        <img src={blux} alt="blux" width={361} height={78} />
        <div className="flex gap-4">
          <button className="cursor-pointer">Documentation</button>
          <button className="border cursor-pointer border-[#0C1083] px-4 gap-1 h-12 flex items-center justify-center">
            Get Demo
            <img src={arrow} alt="arrow" />
          </button>
        </div>
      </div>

      <div className="flex justify-between w-full gap-6">
        <div className="flex flex-col w-2/4">
          <p className="text-[32px] tracking-[-0.5px] h-[38px ] flex items-center gap-2">
            Blux for Stellar <img src={verified} alt="arrow" />
          </p>
          <p className="text-7xl leading-[80px] tracking-[-1px]">
            Effortless UI Toolkit for web3 Apps
          </p>
          <p className="text-lg my-4">
            Onboard users instantly with interactive, no-scroll interfaces. Blux
            enables smooth wallet connections, fast transactions, and intuitive
            navigation—optimized for Stellar-powered application
          </p>
          <div className="mt-12 flex-col">
            <p className="text-2xl !font-normal !font-mono">
              Ready to try it out?
            </p>
            <div>
              <div className="flex gap-2 mt-4">
                <button className="bg-[#0C1083] cursor-pointer p-4 h-14 text-white">
                  npm i @bluxcc/react
                </button>
                <button className="cursor-pointer bg-[#FFCCCC] p-4 gap-1 h-14 flex items-center justify-center">
                  Get Demo <img src={arrow} alt="arrow" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/4">
          <InteractiveBox />
        </div>
      </div>

      <div className="flex justify-between items-center w-full">
        <p>Crafted for Stellar, designed for the future of Web3.</p>
        <p>2025 copyright.</p>
      </div>
    </div>
  );
}

export default App;
