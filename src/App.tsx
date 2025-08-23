import { useState } from "react";

import blux from "/blux.svg";
import xLogo from "/XLogo.svg";
import meadow from "/meadow.svg";
import copyIcon from "/copy.svg";
import stellar from "/stellar.svg";
import whiteArrow from "/whiteArrow.svg";
import bluxProduct from "/bluxProduct.svg";
import discordLogo from "/discordLogo.svg";
import githubLogo from "/github.svg";

function App() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npm i @bluxcc/react");
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="flex font-manrope flex-col justify-between items-center !bg-white font-medium
    text-primary py-[17px] tablet:px-10 tablet:py-8 mobile:px-6 h-screen w-screen desktop:max-h-[1000px]"
    >
      <div className="h-[114px] mobile:flex-col mobile:items-start mobile:gap-6 tablet:h-[74px] mobile:h-auto flex w-full justify-between items-end py-[18px] mobile:pt-0 mobile:pb-3 max-w-[1280px] short:max-w-[1210px]">
        <img
          src={blux}
          alt="blux"
          className="desktop:w-[361px] desktop-h-[78px] tablet:w-[236px] tablet-h-[51px] mobile:w-[268px] mobile-h-[58px]"
        />
        <div className="flex gap-4 mobile:gap-[9px] tablet:text-xs mobile:flex-row-reverse">
          <a
            className="cursor-pointer center h-12 mobile:h-10 tablet:h-8 center desktop:w-[143px] tablet:w-[100px] hover:bg-[#F2F2F2] transition-colors duration-500"
            href="https://docs.blux.cc/"
            target="_blank"
          >
            Documentation
          </a>
          <a
            className="size-12 tablet:size-8 mobile:size-10 border border-[#CDCEEE] center hover:bg-[#F2F2F2] transition-colors duration-500"
            href="https://x.com/bluxofficial"
            target="_blank"
          >
            <img src={xLogo} alt="X" height={24} width={24} />
          </a>
          <a
            className="size-12 tablet:size-8 mobile:size-10 border border-[#CDCEEE] center hover:bg-[#F2F2F2] transition-colors duration-500"
            href="https://github.com/bluxcc/blux"
            target="_blank"
          >
            <img src={githubLogo} alt="github" height={24} width={24} />
          </a>
          <a
            className="size-12 tablet:size-8 mobile:size-10 border border-[#CDCEEE] center hover:bg-[#F2F2F2] transition-colors duration-500"
            href="https://discord.gg/PyDjPnWUYC"
            target="_blank"
          >
            <img src={discordLogo} alt="discord" height={24} width={24} />
          </a>
          <a
            className="border mobile:hidden text-white cursor-pointer bg-primary
            hover:bg-[#04062F] desktop:w-[129px] tablet:w-[95px] gap-1 h-12
            tablet:h-8 flex justify-center items-center transition-colors duration-500 "
            href="https://demo.blux.cc/"
            target="_blank"
          >
            Get Demo
            <img src={whiteArrow} alt="arrow" className="tablet:size-3" />
          </a>
        </div>
      </div>

      <div className="desktop:max-w-[1280px] short:max-w-[1210px] tablet:gap-5 desktop:max-h-[630px] desktop:mt-0 not-visited:mt-3 flex mobile:flex-col-reverse justify-between items-center w-full border border-[#CDCEEE] p-10 mobile:p-4 mobile:items-start tablet:p-6  mobile:mb-4">
        <div className="flex flex-col w-1/2 mobile:w-full justify-between h-full">
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
            <div className="mt-12 tablet:mt-[27px] mobile:mt-10 flex-col">
              <p className="text-lg tablet:text-xs mobile:text-base">
                Get Started with Blux
              </p>
              <div className="flex gap-2 mt-4 mobile:flex-col">
                <div
                  className="center gap-2 tablet:text-xs mobile:text-base mobile:w-full 
                  w-[377px] tablet:w-[214px] tablet:h-[32px] border-b-primary border-b-[2px] 
                  cursor-pointer p-4 h-14 bg-[#F2F2F2]"
                  onClick={handleCopy}
                >
                  npm i @bluxcc/react
                  <div className="relative flex items-center">
                    <img src={copyIcon} alt="copy" className="tablet:size-4" />
                    {copied && (
                      <span className="absolute top-[-50px] left-3 text-xs text-primary bg-[#F2F2F2] p-2">
                        Copied!
                      </span>
                    )}
                  </div>
                </div>
                <a
                  className="hover:bg-[#04062F] transition-colors duration-500 cursor-pointer tablet:text-xs mobile:text-base mobile:w-full bg-primary text-white w-[137px] tablet:w-[95px] tablet:h-[32px] gap-1 h-14 center"
                  href="https://demo.blux.cc/"
                  target="_blank"
                >
                  Get Demo
                  <img src={whiteArrow} alt="arrow" className="tablet:size-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 mobile:w-full flex desktop:justify-end justify-center">
          <div className="relative">
            <img
              src={meadow}
              alt="meadow"
              className="z-10 w-full h-auto short:h-[455px] mobile:h-auto max-w-[554px]"
            />
            <img
              src={bluxProduct}
              alt="bluxProduct"
              className="absolute top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 w-[50%] mobile:h-full h-5/6"
            />
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] short:max-w-[1210px] flex justify-between items-center w-full text-gray tablet:text-xs text-base mobile:justify-end">
        <p className="mobile:hidden">
          The Future of Stellar Applications Starts Here.
        </p>
        <p>© 2025 Blux</p>
      </div>
    </div>
  );
}

export default App;
