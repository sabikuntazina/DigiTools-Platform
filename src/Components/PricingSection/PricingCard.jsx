import React, { useState } from "react";
import PricingFeatures from "./PricingFeatures";
import { TiTick } from "react-icons/ti";

const PricingCard = ({ price, addCarts,removeCarts }) => {
  const [isState, setState] = useState(true);
 const handleClick = (price) => {
  if (isState) {
    addCarts(price);
  } else {
    removeCarts(price);
  }

  setState(!isState);
};
  return (
    <div>
      <div
        className={`card w-96 bg-base-100 shadow-sm hover:scale-100 hover:shadow-xl 
                transition duration-300 mt-10 `}
      >
        <div className="card-body">
          <span
            className={`badge badge-xs p-3 text-lg font-bold absolute top-2 right-2 ${
              price.tag === "New"
                ? "bg-[#DBFCE7] text-[#0A883E]"
                : price.tag === "Best Seller"
                  ? "bg-[#FEF3C6] text-[#BB4D00]"
                  : "bg-[#E1E7FF] text-[#4F39F6]"
            }`}
          >
            {price.tag}
          </span>
          <h2 className="w-15 h-15 rounded-full border shadow-xl flex justify-center items-center text-4xl font-bold">
            {price.icon}
          </h2>

          <h2 className="text-3xl font-bold">{price.planName}</h2>
          <p>{price.description}</p>
          <h2
            className={`text-xl text-gray-500 ${price.tag === "Most Popular" && "text-white"} `}
          >
            <span
              className={`text-5xl text-black font-bold ${price.tag === "Most Popular" && "text-white"}`}
            >
              ${price.price}
            </span>
            /Month
          </h2>
          <ul
            className={`mt-6 flex flex-col gap-2 text-xs flex-1 price.tag==="Most Popular" && "text-white"}`}
          >
            {price.features.map((feature) => (
              <PricingFeatures feature={feature}></PricingFeatures>
            ))}
          </ul>
          <div className="mt-6">
            <button
              onClick={() => handleClick(price)}
              className={`btn rounded-full ${
                isState
                  ? "bg-linear-to-bl from-violet-500 to-[#4F39F6] text-white"
                  : "text-white bg-green-600"
              } text-lg font-semibold w-full py-6`}
            >
              {isState ? (
                price.buttonText
              ) : (
                <>
                  <TiTick></TiTick>Added to Cart
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
