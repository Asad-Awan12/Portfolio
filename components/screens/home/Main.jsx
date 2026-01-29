import React from "react";
import { Hero } from "./Hero";
import { CardSlider } from "./CardSlider";
import { Service } from "./Service";
import { ProfileCard } from "./ProfileCard";
import Comparison from "./Comparison";
import Basic from "./Basic";
import { TagSlider } from "./TagSlider";
import Question from "./Question";
import { Clients } from "./Clients";

export const Main = () => {
  return (
    <div className="">
      <Hero />
      <CardSlider />
      <Service />
      <ProfileCard />
      <Basic />

      <Comparison />
      <Question />
      <Clients />
    </div>
  );
};
