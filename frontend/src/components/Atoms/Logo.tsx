interface LogoProps {
  isNav?: boolean;
}

function Logo({ isNav }: LogoProps) {
  return (
    <div
      className={`py-4 pl-4 font-bold font-custom border-x-transparent border-t-transparent border-solid border-2 ${
        isNav
          ? "text-fourth border-b-transparent text-sm"
          : "text-fourth border-b-fourth/20 text-2xl"
      }`}
    >
      <img
        src="sign.png"
        className="max-h-[14vh] fit-cover px-4 mx-10 transform transition-all cursor-pointer hover:brightness-90 duration-300"
      />
    </div>
  );
}

export default Logo;
