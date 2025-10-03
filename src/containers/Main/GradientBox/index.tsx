import stellar from '/stellar.svg';

const GradientBox = () => {
  return (
    <div
      className="w-full max-w-[1200px] h-auto md:h-[586px] flex flex-col md:flex-row justify-between items-center mb-24 overflow-hidden"
      style={{
        backgroundImage: 'url(/gradient.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Left content */}
      <div className="w-full h-full mb-12 md:w-auto flex flex-col justify-end items-start mt-5 sm:mt-0 pb-0 sm:pb-10 pl-6 md:pl-10">
        {/* Stellar Icon */}
        <div className="flex flex-col items-start mb-4">
          <img
            src={stellar}
            alt="Stellar icon"
            width={40}
            height={40}
            className="mb-3"
          />
        </div>

        {/* Text */}
        <div className="w-full max-w-full md:max-w-[400px]">
          <p className="text-2xl sm:text-3xl md:text-[40px] lg:text-[48px] leading-snug md:leading-[44px] lg:leading-[52px] tracking-tight md:tracking-[-1px]">
            Wallet Infrastructure <br /> for Stellar dapps
          </p>
          <p className="text-sm sm:text-base md:text-base mt-4 leading-5 md:leading-6">
            Blux makes it easy to build on Stellar. Effortlessly create wallets,
            all through a single, developer-friendly API.
          </p>
        </div>
      </div>

      {/* Right image */}
      <div className="w-full md:w-auto flex justify-center md:justify-end mt-8 md:mt-0 relative z-10">
        <img src="/grid.svg" alt="grid" className="w-auto h-auto md:mr-0" />
      </div>
    </div>
  );
};

export default GradientBox;
