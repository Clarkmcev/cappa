interface LogoProps {
  isNav?: boolean;
}

function Logo({ isNav }: LogoProps) {
  return (
    <div
      className={`py-4 pl-4 font-bold font-custom border-x-transparent border-t-transparent border-solid border-2   ${
        isNav
          ? "text-fourth border-b-transparent text-sm"
          : "text-fourth border-b-fourth/20 text-2xl"
      }`}
    >
      Amanda McStudio
    </div>
  );
}

export default Logo;
