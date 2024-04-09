import React from "react";
import Header from "../../components/base/Header/Header";
import Hero from "../../components/base/Hero/Hero";
import Dishes from "../../components/base/Home/Dishes";
import Order from "../../components/base/Home/Order";
import Feedback from "../../components/base/Home/Feedback";
import Newsletter from "../../components/base/Home/Newsletter";
import Footer from "../../Footer/Footer";

export default function HomeScreen() {
  return (
    <div>
      <Header />
      <Hero />
      <Dishes />
      <Order />
      <Feedback />
      <Newsletter />
      <Footer />
    </div>
  );
}
