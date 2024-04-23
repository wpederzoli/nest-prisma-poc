import Logo from "../Icons/Logo";

const Footer: React.FC = () => {
  return (
    <div
      className="bg-gradient bg-repeat bg-top w-full h-96 relative"
      style={{ backgroundImage: "url('/coffee_grains2.png')" }}
    >
      <div
        className="bg-repeat bg-right-top w-full h-full absolute rotate-180"
        style={{ backgroundImage: "url('/coffee_grains.png')" }}
      />
      <div
        className="bg-repeat w-full h-64 absolute bottom-0"
        style={{ backgroundImage: "url('/coffee_grains2.png')" }}
      />
      <div
        className="bg-repeat w-full h-32 absolute bottom-0"
        style={{ backgroundImage: "url('/coffee_grains.png')" }}
      />
      <div
        className="bg-repeat w-full h-16 absolute bottom-0 right-0"
        style={{ backgroundImage: "url('/coffee_grains2.png')" }}
      />
      <div className="flex w-full h-full justify-center items-center">
        <Logo width={589} height={88} className="" />
      </div>
    </div>
  );
};

export default Footer;
