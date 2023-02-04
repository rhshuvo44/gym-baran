import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";

const StaticCard = ({ card }) => {
  return (
    <div className="card card-side px-8">
      <figure>
        <span
          className=" bg-[#a3a0d691] rounded-3xl"
          style={{
            width: "150px",
            height: "100px",
            backdropFilter: "blur(32px)",
          }}
        >
          <Image
            src={card.icon}
            width={43}
            height={48}
            className="w-full h-full p-2"
            alt=""
          />
        </span>
      </figure>
      <div className="card-body">
        <h5
          className=" text-white text-[20px]"
          style={{
            fontFamily: "Poppins",
            lineHeight: "28px",
            fontWeight: 700,
            letterSpacing: "0.01em",
          }}
        >
          {card.title}
        </h5>
        <Link
          href="/"
          className="flex items-center bg-transparent border-0 capitalize justify-between text-white opacity-50 hover:text-white hover:opacity-100 ease-in-out duration-300 "
        >
          {card.btn}
          <span>
            <BsArrowRightShort />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default StaticCard;
