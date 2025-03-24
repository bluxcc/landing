import blux from "/blux.svg";
import stellar from "/stellar.svg";
import whiteArrow from "/whiteArrow.svg";
import blueArrow from "/blueArrow.svg";
import meadow from "/meadow.svg";
import copy from "/copy.svg";
import bluxProduct from "/bluxProduct.svg";

function App() {
  const handleCopy = () => {
    navigator.clipboard.writeText("npm i @bluxcc/react");
  };
  // className =
  //   "desktop:w-[] desktop-h-[] tablet:w-[] tablet-h-[] mobile:w-[] mobile-h-[]";

  return (
    <div
      className="flex font-manrope flex-col justify-between !bg-white font-medium
    text-[#0C1083] py-[17px] px-20 tall:px-46 tablet:p-10 mobile:px-6 h-screen w-screen"
    >
      <div className="h-[114px] tablet:h-[74px] mobile:h-auto flex w-full justify-between items-end py-[18px] mobile:pt-0 mobile:pb-3">
        <img
          src={blux}
          alt="blux"
          className="desktop:w-[361px] desktop-h-[78px] tablet:w-[236px] tablet-h-[51px] mobile:w-[268px] mobile-h-[58px]"
        />
        <div className="flex gap-4 tablet:text-xs mobile:hidden">
          <a
            className="cursor-pointer center h-12 tablet:h-8 center desktop:w-[143px] tablet:w-[100px]"
            href="https://docs.blux.cc/"
            target="_blank"
          >
            Documentation
          </a>
          <a
            className="border cursor-pointer border-[#0C1083] desktop:w-[129px] tablet:w-[95px] gap-1 h-12 tablet:h-8 center"
            href="https://demo.blux.cc/"
            target="_blank"
          >
            Get Demo
            <img src={blueArrow} alt="arrow" className="tablet:size-3" />
          </a>
        </div>
      </div>

      <div className="flex mobile:flex-col-reverse justify-between items-center w-full border border-[#CDCEEE] p-10 mobile:p-4 mobile:items-start tablet:p-6 mt-[13px] mobile:mb-4">
        <div className="flex flex-col w-2/4 mobile:w-full justify-between h-full">
          <div className="text-[22px] mobile:hidden tablet:text-sm max-w-[200px] tablet:max-w-[127px] tablet:leading-[17px] leading-[30px]">
            The Complete Kit for{" "}
            <span className="inline-flex items-center gap-2">
              Stellar
              <img src={stellar} alt="Stellar icon" />
            </span>
          </div>

          <div className="mobile:mt-4">
            <p
              className="text-[40px] leading-11 tracking-[-1px] tablet:text-xl tablet:leading-[28px] tablet:tracking-[0.17px]
            mobile:text-[32px] mobile:leading-[40px] mobile:tracking-[-0.5px] "
            >
              Wallet Infrastructure <br /> for Stellar dapps
            </p>
            <p
              className="text-base my-4 desktop:leading-[20px] w-[520px] leading-[16px] tablet:text-xs tablet:max-w-[310px]
            mobile:text-sm mobile:w-full"
            >
              Blux makes it easy to build on Stellar. Effortlessly create
              wallets, sign transactions, and integrate Stellar’s on-chain
              infrastructure—all through a single, developer-friendly API.
            </p>
            <div className="mt-12 mobile:mt-10 flex-col">
              <p className="text-lg tablet:text-xs mobile:text-base">
                Get Started with Blux
              </p>
              <div className="flex gap-2 mt-4 mobile:flex-col">
                <div className="center tablet:text-xs mobile:text-base mobile:w-full gap-1 w-[377px] tablet:w-[214px] tablet:h-[32px] border-b-[#0C1083] border-b-[2px] cursor-pointer p-4 h-14 bg-[#F2F2F2]">
                  npm i @bluxcc/react{" "}
                  <img src={copy} alt="copy" onClick={handleCopy} />
                </div>
                <a
                  className="cursor-pointer tablet:text-xs mobile:text-base mobile:w-full bg-[#0C1083] text-white w-[137px] tablet:w-[95px] tablet:h-[32px] gap-1 h-14 center"
                  href="https://demo.blux.cc/"
                  target="_blank"
                >
                  Get Demo{" "}
                  <img src={whiteArrow} alt="arrow" className="tablet:size-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/4 mobile:w-full flex desktop:justify-end justify-center">
          <div className="relative">
            <img
              src={meadow}
              alt="meadow"
              className="z-10 w-full h-auto short:h-[450px] mobile:h-auto"
            />
            <img
              src={bluxProduct}
              alt="bluxProduct"
              className="absolute top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 w-[50%] mobile:h-full h-5/6"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center w-full text-[#999999] tablet:text-xs text-base mobile:justify-end">
        <p className="mobile:hidden">
          The Future of Stellar applications Starts Here.
        </p>
        <p>© 2025 Blux</p>
      </div>
    </div>
  );
}

export default App;
