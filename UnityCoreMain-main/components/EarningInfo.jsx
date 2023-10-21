import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function EarningInfo({ effect }) {
  return (
    <div className="earninginfo relative flex flex-row">
      <div className="flex flex-col relative gap-3 h-[200px] w-[1000px]">
        {effect ? (
          <div className="gap-4 flex flex-col">
            <h1 className="text-4xl font-bold text-white">Borrow</h1>
            <p className="text-white">
              To borrow you need to supply any asset to be used as collateral.
            </p>
            <div className="learn w-[300px]">
              <Link className="flex items-center" href="goggle.com">
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                  }}
                >
                  Learn More about Borrowing{" "}
                </p>
                <BsArrowRight className="ml-1" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="gap-4 flex flex-col">
            <h1 className="text-4xl font-bold text-white">Earn</h1>
            <p className="text-white">
              Put your crypto assets to work today. Start generating the best
              yields. Select your Earn product below
            </p>
            <div className="learn w-[300px]">
              <Link className="flex items-center" href="goggle.com">
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                  }}
                >
                  Learn More about Earn{" "}
                </p>{" "}
                <BsArrowRight className="ml-1" />
              </Link>
            </div>
          </div>
        )}
      </div>

      {effect ? (
        <div className="relative w-full h-full">
          <Image
            alt="vector"
            src="/vector.svg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      ) : (
        <div className="relative w-full h-full">
          <Image
            alt="20"
            src="/20.svg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      )}
    </div>
  );
}
