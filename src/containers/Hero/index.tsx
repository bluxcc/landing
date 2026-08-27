import { useState } from 'react';

import copyIcon from '/copy.svg';
import stellar from '/stellar.svg';
import whiteArrow from '/whiteArrow.svg';
import bluxProduct from '/bluxProduct.svg';
import AnimatedRubik from '../../components/AnimatedRubik';

const installCommands = {
  'Next.js': 'npm i @bluxcc/react',
  React: 'npm i @bluxcc/react',
  Vue: 'npm i @bluxcc/core',
  Svelte: 'npm i @bluxcc/core',
  Angular: 'npm i @bluxcc/core',
  Astro: 'npm i @bluxcc/core',
  'HTML / JS': 'npm i @bluxcc/core',
} as const;

type Platform = keyof typeof installCommands;

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const [platform, setPlatform] = useState<Platform>('Next.js');
  const installCommand = installCommands[platform];

  const handleCopy = () => {
    navigator.clipboard.writeText(installCommand);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="overflow-hidden tablet:gap-5 desktop:max-h-[630px] short:max-h-[550px] desktop:mt-0 not-visited:mt-3 flex
     mobile:flex-col-reverse justify-between desktop:h-screen items-center w-full border border-[#CDCEEE] mobile:items-start mobile:mb-4"
    >
      <div className="flex flex-col h-full w-1/2 mobile:w-full justify-between p-10 mobile:p-4 tablet:p-6">
        <div className="text-[22px] cursor-default mobile:hidden tablet:text-sm max-w-[200px] tablet:max-w-[127px] tablet:leading-[17px] leading-[30px]">
          The Complete Kit for{' '}
          <span className="inline-flex items-center gap-2">
            Stellar
            <img src={stellar} alt="Stellar icon" draggable={false} />
          </span>
        </div>

        <div className="mobile:mt-4">
          <p
            className="text-[40px] leading-11 tracking-[-1px] tablet:text-xl tablet:leading-[28px] tablet:tracking-[0.17px]
            mobile:text-[32px] mobile:leading-[40px] cursor-default mobile:tracking-[-0.5px] "
          >
            Authentication &amp; Wallet Infrastructure <br /> for Stellar dApps
          </p>
          <p
            className="text-base my-4 desktop:leading-[20px] w-[520px] cursor-default leading-[16px] tablet:text-xs tablet:max-w-[310px]
            mobile:text-sm mobile:w-full"
          >
            Blux makes it easy to build on Stellar. Effortlessly create wallets,
            sign transactions, and integrate Stellar’s on-chain
            infrastructure—all through a single, developer-friendly API.
          </p>
          <div className="mt-12 tablet:mt-[27px] mobile:mt-10 flex-col">
            <p className="text-lg cursor-default tablet:text-xs mobile:text-base">
              Get Started with Blux
            </p>
            <div className="mt-4 flex gap-2 mobile:flex-col">
              <div className="flex h-14 w-[377px] items-stretch border-b-2 border-b-primary bg-[#F2F2F2] tablet:h-8 tablet:w-[214px] mobile:h-14 mobile:w-full">
                <div className="relative w-[112px] shrink-0 border-r border-[#CDCEEE] tablet:w-[80px] mobile:w-[112px]">
                  <select
                    value={platform}
                    onChange={(event) => {
                      setPlatform(event.target.value as Platform);
                      setCopied(false);
                    }}
                    className="h-full w-full mt-1 cursor-pointer !border-[#CDCEEE] appearance-none border-0 bg-transparent py-0 pl-3 pr-7 text-sm text-primary outline-none tablet:pl-2 tablet:pr-6 tablet:text-xs mobile:pl-3 mobile:pr-7 mobile:text-sm"
                    aria-label="Select your platform"
                  >
                    {Object.keys(installCommands).map((option) => (
                      <option
                        key={option}
                        value={option}
                        className="border-[#CDCEEE] hover:!cursor-pointer"
                      >
                        {option}
                      </option>
                    ))}
                  </select>
                  <img
                    src="/arrow_drop_down_transparent.svg"
                    alt="drop-down"
                    draggable={false}
                    className="pointer-events-none absolute right-0 top-1/2 size-6 -translate-y-1/2"
                  />
                </div>
                <button
                  type="button"
                  className="relative flex min-w-0 flex-1 cursor-pointer items-center justify-between gap-2 px-4 text-sm text-primary tablet:px-2 tablet:text-xs mobile:px-4 mobile:text-sm"
                  onClick={handleCopy}
                  aria-label={`Copy ${installCommand}`}
                >
                  <span className="truncate">{installCommand}</span>
                  <img
                    draggable={false}
                    src={copyIcon}
                    alt=""
                    className="size-5 shrink-0 tablet:size-4 mobile:size-5"
                  />
                  {copied && (
                    <span className="absolute -top-10 right-0 bg-[#F2F2F2] p-2 text-xs text-primary">
                      Copied!
                    </span>
                  )}
                </button>
              </div>
              <a
                className="hover:bg-[#04062F] transition-colors duration-500 cursor-pointer tablet:text-xs mobile:text-base mobile:w-full bg-primary text-white w-[137px] tablet:w-[95px] tablet:h-[32px] gap-1 h-14 center"
                href="https://demo.blux.cc/"
                target="_blank"
              >
                Get Demo
                <img
                  src={whiteArrow}
                  alt="arrow"
                  className="tablet:size-3"
                  draggable={false}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 mobile:w-full flex justify-center desktop:justify-end h-full p-0 tablet:p-6">
        <div className="relative aspect-square mobile:h-auto w-[clamp(300px,46vw,600px)]">
          <AnimatedRubik />

          <img
            draggable={false}
            src={bluxProduct}
            alt=""
            {...{ fetchpriority: 'high' }}
            className="absolute left-1/2 top-1/2 z-20 w-[55%] -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
