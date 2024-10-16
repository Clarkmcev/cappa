import { useFading } from "../../animation/utils";

interface LogoProps {
  isNav?: boolean;
}

function Logo({ isNav }: LogoProps) {
  const { scope } = useFading();

  return (
    <div
      ref={scope}
      className={`pl-4 font-bold font-custom border-x-transparent border-t-transparent border-solid border-2 ${
        isNav
          ? "text-fourth border-b-transparent text-sm"
          : "text-fourth border-b-fourth/20 text-2xl py-4"
      }`}
    >
      <div className="opacity-0">
        <img
          src="sign.png"
          className={`${
            !isNav ? "md:max-h-[14vh]" : "w-20"
          } fit-cover px-4 mx-10 transform transition-all cursor-pointer hover:brightness-90 duration-300`}
        />
      </div>
    </div>
  );
}

export default Logo;
