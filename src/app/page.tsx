import React from "react";

import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Subscribe from "@/app/components/Subscribe";
import CallToAction from "./components/CallToAction";

const Home: React.FC = () => (
  <>
    <Hero />
    <Features />
    <About />
    <CallToAction />
    <Subscribe />
  </>
);

export default Home;
