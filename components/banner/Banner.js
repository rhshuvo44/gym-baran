import Image from "next/image";
import { BiChevronRight } from "react-icons/bi";
import { AiFillPlayCircle } from "react-icons/ai";
const Banner = () => {
  return (
    <div className="min-h-screen p-10 lg:p-20 mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div>
          <h1 className="text-[28px] lg:text-[56px] font-bold text-accent tracking-widest">
            Healthy in side <span className="text-primary">fresh</span> out side{" "}
          </h1>{" "}
          <p className="py-6 text-accent tracking-widest font-poppins">
            Exercise is a very important need for our body.Health and fitness
            will be obtained if you can do regular exercise and run a healthy
            routine{" "}
          </p>
          <button
            style={{
              boxShadow: "0px 20px 80px rgba(51, 78, 123, 0.3)",
            }}
            className="btn btn-secondary capitalize justify-between mr-5 gap-20"
          >
            Get Started{" "}
            <span className="bg-white w-[26] h-[26] rounded-full text-primary">
              <BiChevronRight />
            </span>
          </button>
          <button
            style={{
              boxShadow: "0px 20px 80px rgba(51, 78, 123, 0.3)",
            }}
            className="btn bg-base-100 border-0 text-secondary hover:text-white ease-in duration-500 capitalize justify-between gap-5 shadow-lg"
          >
            <span className=" w-[26] h-[26] rounded-full">
              <AiFillPlayCircle />
            </span>
            Learn more
          </button>
          <div className="mt-10">
            <p>Brand :</p>
          </div>
        </div>
        <div className="flex justify-end">
          <Image
            className=""
            src="/image77.png"
            alt=".."
            priority
            title="..."
            width={358}
            height={580}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
