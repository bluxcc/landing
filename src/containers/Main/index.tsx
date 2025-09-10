import Card from "../../components/Card";

const Main = () => {
  return (
    <div className="flex w-full gap-4 max-w-[1200px] h-[587px] my-25">
      <Card>
        <div className="text-primary flex justify-center flex-col space-y-2 items-center pt-7 pb-20 px-20">
          <img src="public/copy.svg" alt="" />
          <h2 className="text-2xl">Track Users and Wallet Activity</h2>
          <p className="text-sm text-center">
            Blux dashboard gives you clear visibility into your dApp’s
            performance.
          </p>

          {/* Container with animated gradient background */}
          <div className="relative mt-5">
            {/* Moving gradient shadow */}
            <div
              className="absolute inset-0 rounded-full animate-gradient"
              style={{
                background:
                  "linear-gradient(114.6deg, rgba(238, 208, 235, 0.7) -1.17%, rgba(145, 159, 253, 0.7) 102.28%)",

                filter: "blur(60px)",
              }}
            ></div>

            {/* Foreground image */}
            <img src="public/dashboard.svg" alt="" className="relative z-10" />
          </div>
        </div>
      </Card>

      <Card>
        <div className="text-primary flex justify-center flex-col space-y-2 items-center pt-7 pb-10 px-20">
          <img src="public/copy.svg" alt="" />
          <h2 className="text-2xl">Wallet Experience</h2>
          <p className="text-sm text-center">
            Enable users to manage assets, send and receive payments, and sign
            transactions with ease.
          </p>

          {/* Container with animated gradient background */}
          <div className="relative mt-5">
            {/* Moving gradient shadow */}
            <div
              className="absolute inset-0 rounded-full animate-gradient"
              style={{
                background:
                  "linear-gradient(114.6deg, rgba(238, 208, 235, 0.7) -1.17%, rgba(145, 159, 253, 0.7) 102.28%)",
                filter: "blur(60px)",
              }}
            ></div>

            {/* Foreground image */}
            <img src="public/profile.svg" alt="" className="relative z-10" />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Main;
