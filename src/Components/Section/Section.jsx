import React from "react";
import SelectedCart from "../SelectedCart/SelectedCart";
import PricingSection from "../PricingSection/PricingSection";
import ToggleSection from "../ToggleSection/ToggleSection";

const Section = ({ pricePromise, toggle, setToggle, addCarts, carts,setCarts,removeCarts }) => {
  return (
    <div className="lg:max-w-7xl lg:mx-auto space-y-5 my-20">
      <h1 className="text-center text-3xl leading-relaxed md:text-5xl font-bold">
        Premium Digital Tools
      </h1>
      <p className="text-center text-xl px-3 md:text-2xl font-semibold text-gray-400">
        Choose from our curated collection of premium digital products designed{" "}
        <br /> to boost your productivity and creativity.
      </p>
      <ToggleSection toggle={toggle} setToggle={setToggle} carts={carts}></ToggleSection>
      {toggle ? (
        <PricingSection
          addCarts={addCarts}
          pricePromise={pricePromise}
          toggle={toggle}
          removeCarts={removeCarts}
        ></PricingSection>
      ) : (
        <SelectedCart carts={carts} setCarts={setCarts} removeCarts={removeCarts}></SelectedCart>
      )}
    </div>
  );
};

export default Section;
