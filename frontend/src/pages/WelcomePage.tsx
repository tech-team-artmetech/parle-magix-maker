export const WelcomePage = () => {
  return (
    <div className="bg-background w-full h-screen relative">
      <div className="absolute right-0 w-full h-full inset-y-0 z-1 shrink-0">
        <img
          src="assets/background.png"
          alt="parle_background"
          className="w-full h-full"
        />
        <img
          src="assets/parle_pencil.png"
          alt="parle_pencil"
          className="object-contain z-1 absolute right-0 w-fit bottom-0"
        />
      </div>
      <div className="flex flex-col items-center justify-center relative z-1 overflow-x-clip">
        <img
          src="assets/parle_magix_maker_brand.png"
          alt="parle_magix_maker"
          className="object-contain z-2 size-[340px] bg-red-400_"
        />
        <img
          src="assets/parle_biscuit_whole.png"
          alt="parle_magix_whole"
          className="object-contain z-1 absolute -top-12 -right-24"
        />
        <div className="relative flex flex-col text-center text-white gap-y-2.5 w-full">
          <h1 className="text-3xl font-bold">WELCOME CHAMPION!</h1>
          <h1 className="text-xl">
            Start your <span className="text-[#FFC800]">MAGIX</span> story
          </h1>
          <img
            src="assets/parle_biscuit_cut_1.png"
            alt="parle_magix_biscuit_cut"
            className="object-contain z-1 absolute top-11"
          />
          <img
            src="assets/parle_biscuit_cut_1.png"
            alt="parle_magix_biscuit_cut"
            className="object-contain z-1 absolute top-20 rotate-150 right-0"
          />
        </div>

        <div className="pt-9">
          <img src="assets/magix_makes_magical.png" />
        </div>
        <div className="bg-white font-bold text-[#0F3560] max-w-[250px] rounded-md w-full text-center py-2 mt-12 px-8">
          <button>Start Creating</button>
        </div>
      </div>
    </div>
  );
};
