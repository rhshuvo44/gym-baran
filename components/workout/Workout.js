import Image from "next/image";
import { BiChevronRight } from "react-icons/bi";
import { FcBusinessman } from "react-icons/fc";
import pose from "../../public/crucified-pose-svgrepo-com.svg";
import dancerMotion from "../../public/dancer-motion-svgrepo-com.svg";
import practicing from "../../public/person-practicing-kickboxing-svgrepo-com.svg";
const Workout = () => {
  return (
    <div className=" p-10 lg:p-20 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="relative">
          <div className="">
            {/* member  */}

            {/* pose  */}
            <div className=" absolute top-24 right-0 z-20">
              <div className="card card-side px-5">
                <span
                  style={{
                    background:
                      "linear-gradient(50.31deg, #4BACE1 15.91%, #D8F1FF 92.82%)",
                    boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.09)",
                    borderRadius: "100px",
                    width: "60px",
                    height: "60px",
                  }}
                >
                  <Image
                    src={pose}
                    width={43}
                    height={48}
                    alt=""
                    className="w-full h-full p-2"
                  />
                </span>
              </div>
            </div>
            <Image
              className="absolute left-14 z-10"
              src="/image78.png"
              alt=".."
              priority
              title="..."
              width={416}
              height={496}
            />
            <Image
              className="absolute bottom-0 z-0 left-[40px]"
              src="/Vector 35.png"
              alt=".."
              priority
              title="..."
              width={414}
              height={307}
            />

            {/* practicing */}
            <div className="absolute top-10 left-20 z-20">
              <div className="card card-side px-5">
                <span
                  style={{
                    background:
                      "linear-gradient(35.49deg, #DD69C7 15.2%, #FFC0F3 87.25%)",
                    boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.09)",
                    borderRadius: "100px",
                    width: "60px",
                    height: "60px",
                  }}
                >
                  <Image
                    src={practicing}
                    width={43}
                    height={48}
                    alt=""
                    className="w-full h-full p-2"
                  />
                </span>
              </div>
            </div>

            <div className=" absolute bottom-8 left-[-26px] z-20">
              <div className="card card-side bg-base-100 shadow-xl px-3">
                <figure>
                  <span
                    style={{
                      background:
                        "linear-gradient(45.98deg, #5478EF 19.69%, #D6DFFF 92.63%)",
                      boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.09)",
                      borderRadius: "100px",
                      width: "60px",
                      height: "60px",
                    }}
                  >
                    <Image
                      src={dancerMotion}
                      width={43}
                      height={48}
                      alt=""
                      className="w-full h-full p-2"
                    />
                  </span>
                </figure>
                <div className="card-body p-3">
                  <h5 className="text-[16px] font-bold">800 kall</h5>
                  <p className="text-[#262524] text-[12px] opacity-50">
                    Burn fat
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24 pl-10">
          <h2 className="text-[28px] lg:text-[46px] font-bold text-accent">
            Best full body workout to lose fat
          </h2>{" "}
          <p className="py-6 text-accent tracking-widest font-poppins">
            Exercise is a very important need for our body. Health and fitness
            will be obtained if you can do regular exercise and run a healthy
            routine. Even at home we still have to be diligent in exercising,
            either alone or with your friends at home.
          </p>
          <button
            style={{
              boxShadow: "0px 20px 80px rgba(51, 78, 123, 0.3)",
            }}
            className="btn btn-secondary capitalize justify-between mr-[10px] lg:mr-5 w-[146px] lg:w-[276px]"
          >
            Get Started{" "}
            <span className="bg-white w-[26] h-[26] rounded-full text-primary">
              <BiChevronRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Workout;
