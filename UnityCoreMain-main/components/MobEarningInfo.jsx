import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function MobEarningInfo({ effect }) {
  return (
    <div className="earninginfo relative flex flex-row">
      <div className="flex flex-col relative gap-3 h-[200px] w-full">
        {effect ? (
          <div className="gap-4 flex flex-col">
            <h1 className="text-2xl font-bold text-white">Borrow</h1>
            <p className="text-white text-md">
              To borrow you need to supply any asset to be used as collateral.
            </p>
            <div className="learn w-[300px]">
              <Link className="flex items-center" href="goggle.com">
                <p
                  style={{
                    fontSize: "13px",
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
            <h1 className="text-3xl font-bold text-white">Earn</h1>
            <p className="text-white text-md">
              Put your crypto assets to work today. Start generating the best
              yields. Select your Earn product below
            </p>
            <div className="learn w-[300px]">
              <Link className="flex items-center" href="goggle.com">
                <p
                  style={{
                    fontSize: "13px",
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
    </div>
  );
}
