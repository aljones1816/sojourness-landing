import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import CallToAction from "./components/CallToAction";

import Footer from "./components/Footer";

const Home: React.FC = () => (
  <>
    <Header />
    <Hero />
    <Features />
    <About />
    <CallToAction />
    <Footer />
  </>
);

export default Home;
