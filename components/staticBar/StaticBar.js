import pose from "../../public/crucified-pose-svgrepo-com.svg";
import dancerMotion from "../../public/dancer-motion-svgrepo-com.svg";
import man from "../../public/man-on-yoga-posture-svgrepo-com.svg";
import StaticCard from "./StaticCard";

const StaticBar = () => {
  const sataticDatas = [
    {
      title: "Get that 11 line in 30 days",
      btn: "Learn more",
      icon: pose,
    },
    {
      title: "14 Days sherd challenge",
      btn: "Learn more",
      icon: man,
    },
    {
      title: "Get flat belly in 30 days",
      btn: "Learn more",
      icon: dancerMotion,
    },
  ];
  return (
    <div className="p-10 lg:p-20">
      <div
        className=" px-[85]"
        style={{
          background: "linear-gradient(87.05deg, #6462F0 0%, #9190E9 95.5%)",
          borderRadius: "30px",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 py-8">
          {sataticDatas.map((card, index) => (
            <StaticCard key={index} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaticBar;
