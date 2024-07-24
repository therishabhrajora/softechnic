import React from "react";
import Main from "./Main";
import SidebarBtn from "../../butoons/SidebarBtn";
import StoreTabs from "./StoreTabs";
import Containers from "./Containers";
import HeroBanner from "./HeroBanner";
import BusinessContainer from "./BusinessContainer";
import SocialLinks from "./SocialLinks";

function Home() {
  return (
    <div className="relative">
      <Main />
      <SidebarBtn />
      <StoreTabs />
      <Containers />
      <HeroBanner />
      <BusinessContainer />
      <SocialLinks />
    </div>
  );
}

export default Home;
