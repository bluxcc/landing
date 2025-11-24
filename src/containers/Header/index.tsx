import blux from '/blux.svg';
import githubLogo from '/github.svg';
export const Header = () => {
  return (
    <div className="h-[114px] mobile:flex-col mobile:items-start mobile:gap-6 tablet:h-[74px] mobile:h-auto flex w-full justify-between items-end py-[18px] mobile:pt-0 mobile:pb-3">
      <img
        src={blux}
        alt="Blux"
        draggable={false}
        className="desktop:w-[361px] desktop-h-[78px] tablet:w-[236px] tablet-h-[51px] mobile:w-[268px] mobile-h-[58px]"
      />
      <div className="flex gap-4 mobile:gap-[9px] tablet:text-xs mobile:flex-row-reverse">
        <a
          className="cursor-pointer center h-12 mobile:h-10 tablet:h-8 center desktop:w-[143px] tablet:px-4 hover:bg-[#F2F2F2] transition-colors duration-500"
          href="https://docs.blux.cc/"
          target="_blank"
        >
          Documentation
        </a>

        <a
          className="size-12 tablet:size-8 mobile:size-10 border border-[#CDCEEE] center hover:bg-[#F2F2F2] transition-colors duration-500"
          href="https://github.com/bluxcc/blux"
          target="_blank"
        >
          <img src={githubLogo} alt="github" height={24} width={24} />
        </a>

        <a
          className="border mobile:hidden text-primary border-none cursor-pointer bg-[#E8E8FD]
            hover:bg-[#CDCEEE] w-[126px] tablet:w-[120px] h-12 text-sm
            tablet:h-8 flex justify-center items-center transition-colors duration-500"
          href="https://dashboard.blux.cc/"
          target="_blank"
        >
          View Dashboard
          {/* Get Demo
          <img src={whiteArrow} alt="arrow" className="tablet:size-3" /> */}
        </a>
      </div>
    </div>
  );
};

export default Header;
