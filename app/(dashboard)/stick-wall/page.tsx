import Header from "@/components/header/Header";
import StickWallSection from "@/container/dashboard-page/stickWall-section";
import AddStick from "@/container/dashboard-page/stickWall-section/add-stick";

const StickWall = () => {
  return (
    <section className="text-sm flex w-full  h-full">
      <div className="flex-1 flex flex-col">
        <Header heading="Stick Wall" />
        <AddStick /> {/* CREATE STICK DRAWYER  */}
        <StickWallSection />
      </div>
    </section>
  );
};

export default StickWall;
