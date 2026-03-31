import { useState } from "react";
import "./App.css";
import FooterSection from "./Components/FooterSection/FooterSection";
import HeroSection from "./Components/HeroSection/HeroSection";
import Navbar from "./Components/Navbar/Navbar";
import PopularSection from "./Components/PopularSection/PopularSection";

import Steps from "./Components/Steps/Steps";
import ToggleSection from "./Components/ToggleSection/ToggleSection";
import TransprentPricing from "./Components/TransprentPricing/TransprentPricing";
import WorkFlow from "./Components/WorkFlow/WorkFlow";

import Section from "./Components/Section/Section";

const pricePromise = fetch("/data.json").then((res) => res.json());

function App() {
  const [toggle, setToggle] = useState(true);
  const [carts, setCarts] = useState([]);
  const addCarts = (cart) => {
    console.log(cart);
    setCarts([...carts, cart]);
    console.log(carts);
  };
  const removeCarts=(c)=>{
     const newCart=carts.filter(crd=>crd.name!==c.name);
    setCarts(newCart);
    // const newPrice= coin+p.price;
    // setCoin(newPrice);
  }

  return (
    <div>
      <Navbar carts={carts}></Navbar>
      <HeroSection></HeroSection>
      <PopularSection></PopularSection>
      <Section
        addCarts={addCarts}
        pricePromise={pricePromise}
        toggle={toggle}
        setToggle={setToggle}
        carts={carts}
        removeCarts={removeCarts}
        setCarts={setCarts}
      ></Section>

      <Steps></Steps>
      <TransprentPricing></TransprentPricing>
      <WorkFlow></WorkFlow>
      <FooterSection></FooterSection>
    </div>
  );
}

export default App;
