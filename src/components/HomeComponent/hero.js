import React from "react";
import CardGroup from './SectionTwoComponent/cardGrouComponent'
import VideoSection from './SectionThreeComponent/videoSection'
import LeaderBoadr from './SectionFourComponent/LeaderBoard'
import "./hero.css";
export default function hero() {
  return (
    <body>
      <section id="firstSection"></section>
      <CardGroup/>
      <VideoSection/>
      <LeaderBoadr/>
    </body>
  );
}
