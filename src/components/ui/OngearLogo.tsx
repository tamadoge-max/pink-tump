import Image from "next/image";
const OngearLogo = () => {
  return (
    <div className="flex items-center gap-1">
      <img src="/assets/logo2.png" alt="logo" className="w-[44px] h-[44px]" />

      <h1 className="text-xl font-bold text-pink-500">PumpPink</h1>
    </div>
  );
};

export default OngearLogo;
