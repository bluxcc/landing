import blux from "/blux.svg";
import xLogo from "/XLogo.svg";
import discordLogo from "/discordLogo.svg";
import githubLogo from "/github.svg";
import whiteArrow from "/whiteArrow.svg";

export const Header = () => {
  return (
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
  );
};

export default Header;
