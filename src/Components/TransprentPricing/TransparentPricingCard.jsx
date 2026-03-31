import React from "react";
import TansparentFeatures from "./TansparentFeatures";

const TransparentPricingCard = ({ price }) => {
  return (
    <div
      className={`card w-96 bg-base-100 shadow-sm ${price.tag === "Most Popular" && "bg-linear-to-bl from-violet-500 to-[#4F39F6] text-white"} hover:scale-100 hover:shadow-xl 
                transition duration-300 mt-10 `}
    >
      <div className="card-body">
        {price.tag === "Most Popular" && (
          <span className="badge badge-xs absolute -top-2 left-[40%] p-3 bg-amber-100 text-yellow-700 font-bold ">
            Most Popular
          </span>
        )}

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
            <TansparentFeatures feature={feature}></TansparentFeatures>
          ))}
        </ul>
        <div className="mt-6">
          <button
            className={`btn rounded-full ${
              price.tag === "Most Popular"
                ? "bg-white text-[#4F39F6]"
                : "bg-linear-to-bl from-violet-500 to-[#4F39F6] text-white"
            } text-lg font-semibold w-full py-6`}
          >
            {price.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransparentPricingCard;
