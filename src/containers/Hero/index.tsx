import { useState } from 'react';

import copyIcon from '/copy.svg';
import stellar from '/stellar.svg';
import whiteArrow from '/whiteArrow.svg';
import bluxProduct from '/bluxProduct.svg';
import AnimatedRubik from '../../components/AnimatedRubik';

const Hero = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('npm i @bluxcc/react');
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="tablet:gap-5 desktop:max-h-[630px] short:max-h-[550px] desktop:mt-0 not-visited:mt-3 flex
     mobile:flex-col-reverse justify-between desktop:h-screen items-center w-full border border-[#CDCEEE] mobile:items-start mobile:mb-4"
    >
      <div className="flex flex-col h-full w-1/2 mobile:w-full justify-between p-10 mobile:p-4 tablet:p-6">
        <div className="text-[22px] mobile:hidden tablet:text-sm max-w-[200px] tablet:max-w-[127px] tablet:leading-[17px] leading-[30px]">
          The Complete Kit for{' '}
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
            Blux makes it easy to build on Stellar. Effortlessly create wallets,
            sign transactions, and integrate Stellar’s on-chain
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
      <div className="w-1/2 mobile:w-full flex justify-center desktop:justify-end h-full p-0 tablet:p-6">
        <div className="relative aspect-square mobile:h-auto w-[clamp(300px,46vw,600px)]">
          <AnimatedRubik />

          <img
            src={bluxProduct}
            alt=""
            className="absolute left-1/2 top-1/2 z-20 w-[55%] -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
