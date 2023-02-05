import Image from "next/image";
import { AiFillPlayCircle } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import { SiAdidas, SiNike } from "react-icons/si";
import pose from "../../public/crucified-pose-svgrepo-com.svg";
import dancerMotion from "../../public/dancer-motion-svgrepo-com.svg";
import practicing from "../../public/person-practicing-kickboxing-svgrepo-com.svg";

import { FcBusinessman } from "react-icons/fc";
const Banner = () => {
  return (
    <div className=" p-10 lg:p-20 mt-0 lg:mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="mt-24">
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
            className="btn btn-secondary capitalize justify-between mr-[10px] lg:mr-5 w-[146px] lg:w-[276px]"
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
            className="btn bg-base-100 border-0 text-secondary hover:text-white ease-in duration-500 capitalize justify-between gap-3 lg:gap-5 shadow-lg"
          >
            <span className=" w-[26] h-[26] rounded-full">
              <AiFillPlayCircle />
            </span>
            Learn more
          </button>
          <div className="mt-10 w-72">
            <p>Brand :</p>
            <ul className="grid grid-cols-4 gap-0 lg:gap-[127px]">
              <li>
                <SiNike className="w-16 h-20 text-[#35507D] opacity-50" />
              </li>
              <li>
                <SiAdidas className="w-16 h-20 text-[#35507D] opacity-50" />
              </li>
              <li>
                <svg
                  fill="#35507D"
                  opacity=".5"
                  width="60px"
                  height="80px"
                  viewBox="35.433 -191.049 889.299 889.299"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m512.857 36.99c-2.898.447-5.684 11.118-11.285 16.677-4.096 4.012-9.209 3.761-11.925 8.721-1.031 1.853-.697 5.016-1.867 8.053-2.285 6.074-10.337 6.617-10.337 13.235-.028 7.147 6.715 8.512 12.552 13.583 4.556 4.082 5.002 6.896 10.518 8.874 4.71 1.603 11.717-3.636 18.028-1.755 5.183 1.547 10.142 2.661 11.313 7.983 1.03 4.904-.07 12.51-6.353 11.633-2.118-.237-11.299-3.33-22.583-2.132-13.612 1.547-29.146 5.99-30.664 21.163-.836 8.484 9.654 18.487 19.783 16.453 7.007-1.38 3.692-9.64 7.509-13.653 5.001-5.14 33.338 17.944 59.683 17.944 11.09 0 19.337-2.8 27.53-11.382.765-.655 1.699-2.062 2.883-2.146 1.115.084 3.065 1.184 3.706 1.658 21.218 17.052 37.253 51.255 115.229 51.659 10.964.055 23.46 5.294 33.658 14.6 9.098 8.415 14.42 21.496 19.588 34.773 7.802 19.923 21.79 39.302 42.993 60.868 1.157 1.156 18.613 14.726 20.006 15.743.223.139 1.505 3.204 1.06 4.917-.516 12.929-2.397 50.53 25.633 52.23 6.855.348 5.057-4.472 5.057-7.788-.013-6.548-1.212-13.054 2.244-19.755 4.722-9.222-10.017-13.472-9.585-33.408.306-14.865-12.177-12.33-18.516-23.656-3.65-6.562-6.896-10.044-6.659-18.07 1.421-45.165-9.613-74.84-15.116-82.126-4.29-5.503-7.843-7.69-3.915-10.24 23.392-15.45 28.7-29.828 28.7-29.828 12.44-29.242 23.628-55.95 39.05-67.707 3.107-2.425 11.076-8.373 15.966-10.714 14.391-6.785 21.97-10.894 26.15-14.963 6.617-6.45 11.841-19.894 5.502-28.044-7.885-10.059-21.524-2.076-27.542 1.49-43.007 25.524-49.346 70.55-64.24 96.408-11.883 20.66-31.206 35.832-48.481 37.072-12.957.961-26.916-1.658-40.82-7.76-33.812-14.823-52.314-33.965-56.674-37.35-9.084-7.008-79.606-76.235-136.74-79.063 0 0-7.09-14.196-8.874-14.433-4.18-.53-8.456 8.484-11.521 9.53-2.884.96-7.732-9.767-10.644-9.293m-251.522 413.171c-5.378-.126-9.947-4.542-9.947-10.003l.014-178.214h-58.736v196.45c0 9.627 7.801 17.485 17.372 17.485h102.663c9.64 0 17.345-7.858 17.345-17.485v-196.45h-58.68l-.056 178.214c0 5.461-4.57 9.877-9.975 10.003m196.659-188.217h-88.898c-10.518 0-19.086 8.554-19.086 19.184v194.75h58.79v-178.644c.042-5.475 4.472-9.808 9.934-9.808 5.489 0 9.891 4.235 10.016 9.655v178.798h58.555v-178.8c.07-5.419 4.472-9.654 9.947-9.654 5.434 0 9.92 4.333 9.962 9.808v178.646h58.791v-194.751c0-10.63-8.582-19.184-19.1-19.184zm-343.931 35.665c.042-5.949-4.806-10.184-9.947-10.184h-9.975v108.207h9.975c5.183 0 9.99-4.124 9.947-10.044zm39.413 124.507h-59.335v53.763h-58.708v-213.935h118.42c10.601 0 18.876 8.61 18.876 19.268v121.637c0 10.672-8.595 19.267-19.253 19.267m613.996 5.921c-11.8 0-21.706 10.198-21.706 22.556 0 12.399 9.906 22.513 22.082 22.513 12.079 0 21.859-10.114 21.859-22.513 0-12.386-9.78-22.556-21.86-22.556zm26.442 22.486c0 14.53-11.647 26.345-26.066 26.345-14.573 0-26.275-11.73-26.275-26.345 0-14.336 11.702-26.317 25.843-26.317 14.851 0 26.498 11.62 26.498 26.317" />
                  <path d="m765.131 448.852c4.082 0 6.228-1.449 6.228-4.346 0-2.578-2.076-3.901-6.047-3.901h-1.17v8.247zm15.033 16.913h-7.008l-9.014-11.995v11.995h-5.726v-30.329h6.019c8.178 0 12.524 3.093 12.524 9 0 3.942-2.563 7.44-6.144 8.484l-.418.154zm-115.591-70.09v-98.51c-.14-5.448-4.528-9.627-10.003-9.627-5.42 0-9.906 4.346-9.947 9.78v98.357zm0 80.205v-53.707h-19.95v53.707h-58.68v-194.751c0-10.63 8.567-19.184 19.086-19.184h99.137c10.547 0 19.115 8.554 19.115 19.184v194.75z" />
                </svg>
              </li>
              <li>
                <svg
                  width="60px"
                  opacity=".5"
                  height="80px"
                  viewBox="0 0 192.756 192.756"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill-rule="evenodd" clip-rule="evenodd">
                    <path fill="#ffffff" d="M0 0h192.756v192.756H0V0z" />

                    <path
                      d="M153.598 118.639c-2.732-1.912-6.281-3.006-10.654-3.006-4.096 0-7.646 1.094-10.648 3.006-3.006 2.455-4.645 5.463-4.645 9.285 0 3.824 1.639 6.555 4.645 9.012 3.002 1.912 6.553 3.006 10.648 3.006 4.373 0 7.922-1.094 10.654-3.006 3.277-2.457 4.643-5.188 4.643-9.012-.001-3.822-1.366-6.83-4.643-9.285zm-10.655 3.822c1.914 0 3.279.547 4.645 1.365 1.094 1.094 1.912 2.184 1.912 3.551.271 3.824-1.912 5.736-6.557 5.736-1.912 0-3.549-.547-4.914-1.641-1.094-1.092-1.639-2.457-1.639-4.096.271-1.367.82-2.457 1.91-3.551 1.366-.817 2.731-1.364 4.643-1.364zM188.828 116.451h-9.832l-9.558 9.016V109.08h-9.014v30.315h9.014v-12.291l9.011 12.291h11.473l-11.744-13.11 10.65-9.834zM79.308 116.18c-4.644 0-8.193 1.094-10.925 3.002-2.731 2.188-4.097 4.92-4.37 8.742 0 7.373 5.189 11.199 15.842 11.471h13.383v-6.281H80.4c-3.55-.275-6.008-1.094-6.828-2.732-1.092-1.639-1.092-3.277-.273-4.914 1.093-1.912 3.277-3.006 6.009-3.006h5.462l-6.009 7.92h8.467l6.009-7.646v-6.555H79.308v-.001zM105.254 109.08h-9.286v30.043H112.9c3.826 0 6.828-1.094 9.014-3.279 2.459-1.912 3.551-4.643 3.824-7.92 0-6.555-2.73-10.107-8.193-11.197l-7.646-.275-4.098 6.01h3.551c5.463 0 7.92 1.641 7.92 5.463-.273 3.277-2.73 5.189-7.373 5.189h-4.645V109.08zM2.834 109.08v30.043h9.286v-23.217h8.74c1.911.545 3.277 1.639 3.005 3.822 0 1.365-.547 2.459-1.639 2.732l-8.74.818 9.559 16.115h11.198l-9.286-12.562c5.736-.275 8.467-3.277 7.92-8.74 0-3.006-1.366-5.191-3.823-6.828-2.186-1.365-4.917-2.184-8.194-2.184H2.834v.001z"
                      fill="#35507D"
                    />

                    <path
                      d="M48.718 116.18c-4.643 0-8.193 1.094-10.925 3.002-2.731 1.912-4.097 4.92-4.097 8.469-.272 7.646 4.917 11.473 15.295 11.473h13.656v-6.01H49.812c-3.552-.275-6.009-1.094-6.828-2.732-1.093-1.639-1.093-3.277-.273-4.914 1.092-1.912 3.276-3.006 6.008-3.006h5.462l-6.008 7.92h8.467l6.008-7.92v-6.281h-13.93v-.001zM97.334 61.009l14.201 8.74 22.668-8.466c7.65-2.458 17.482-5.19 29.225-8.468-28.949 2.459-50.799 4.916-66.094 8.194zM86.41 70.296l-12.564-3.278c-7.101 1.913-13.929 4.916-20.21 8.741-6.283 3.822-11.198 8.194-14.476 12.837h21.304c1.639-2.459 4.37-5.191 7.92-7.922 5.188-4.369 11.198-7.647 18.026-10.378zM101.432 75.484L90.78 71.933c-2.459 1.094-5.462 2.459-9.014 4.916-4.916 3.278-9.286 7.375-13.109 11.747h19.937c2.731-4.372 7.101-8.741 12.838-13.112zM77.124 52.815H34.517l42.606 11.472c18.845 5.734 36.324 12.291 52.441 19.118l-52.44-30.59z"
                      fill="#35507D"
                    />
                  </g>
                </svg>
              </li>
            </ul>
          </div>
        </div>

        {/* banner img section */}
        <div className="pl-5 lg:pl-48">
          <div className="mt-10 relative">
            {/* member  */}
            <div className=" absolute top-10 lg:top-24 left-[-40px] lg:left-[-140px] z-20">
              <div className="card card-side bg-base-100 shadow-xl px-2 lg:px-5">
                <figure>
                  <span
                    className="w-[35px] h-[35px] lg:w-[60px] lg:h-[60px]"
                    style={{
                      background:
                        "linear-gradient(45deg, #F8A422 13.75%, #FEDEAC 92.08%)",
                      boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.09)",
                      borderRadius: "100px",
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
                <div className="card-body p-4 lg:p-8">
                  <h5 className="text-[10px] lg:text-[16px] font-bold">150+</h5>
                  <p className="text-[#262524] text-[7px] lg:text-[12px] opacity-50">
                    Members
                  </p>
                </div>
              </div>
            </div>
            {/* pose  */}
            <div className="absolute top-10 lg:top-24 right-[-20px] lg:right-[-50px] z-20">
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
              className="absolute mx-auto bottom-0 z-10 w-[250px] lg:w-[427px]"
              src="/Vector 32.png"
              alt=".."
              title="..."
              width={427}
              height={323}
            />
            <Image
              className="absolute bottom-0 lg:right-5 z-0 h-[254px] lg:h-[434px] w-[254px] lg:w-[434px]"
              src="/Ellipse 136.png"
              alt=".."
              title="..."
              width={434}
              height={434}
            />
            <div className="relative px-5 z-10">
              <Image
                src="/image77.png"
                className="w-[209px] lg:w-[358px]"
                alt=".."
                priority
                title="..."
                width={358}
                height={588}
              />
            </div>
            {/* shape  */}
            <div
              className="absolute left-0 lg:left-[-30px] bottom-10 text-primary shape w-[209px] h-[250px] lg:h-[320px]"
              style={{
                background: "url(/Vector33.png)",
              }}
            ></div>
            {/* traing  */}
            <span className="absolute z-20 bottom-10 right-0 lg:right-[-30px]">
              <div className="card w-[109px] lg:w-[187px] bg-base-100 shadow-xl">
                <figure className="p-2">
                  <FcBusinessman className="text-white bg-primary rounded-full w-[38px] h-[38px] lg:w-[66px] lg:h-[66px]" />
                </figure>
                <div className="py-2 text-center ">
                  <h2 className="text-[9px] lg:text-[16px]">Zaqky Simorang</h2>
                  <p className="text-[#262524] opacity-50">Trainer</p>
                </div>
              </div>
            </span>

            {/* practicing */}
            <div className="absolute bottom-10 left-[-70px] lg:left-[-140px] z-20">
              <div className="card card-side px-5">
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
                    src={practicing}
                    width={43}
                    height={48}
                    alt=""
                    className="w-full h-full p-2"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
