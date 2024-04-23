import { Topbar, Banner } from "@/components";

const LandingSection: React.FC = () => {
  return (
    <div className="bg-[url('/bg.jpg')] 2xl:bg-contain 2xl:bg-no-repeat 2xl:bg-left-top bg-center bg-cover bg-gradient relative">
      <div className="w-full h-screen bg-gradient-to-b from-black/65 via-black/65 via-65% to-gradient lg:to-95%" />
      <div className="absolute top-0 w-full h-full">
        <Topbar
          btnText="Create"
          styles="p-8 md:pl-72 md:pr-72 justify-center justify-between"
        />
        <Banner
          title="Roasted coffee"
          text="Choose a coffee from below or create your own"
          btnText="Create your own coffee"
          styles="md:pt-64 md:pl-72 md:text-left md:mt-0 text-center mt-20"
        />
      </div>
    </div>
  );
};
export default LandingSection;
