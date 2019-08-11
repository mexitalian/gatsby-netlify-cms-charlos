import React from "react";
import Header from "./Header";
import Testimonials from "./Testimonials";
import CTA from "./CTA";


const HomePageTemplate = ({ home, upcomingMeetup = null }) => {
  return (
    <>
      <Header home={home} />
      <Testimonials home={home} testimonals={upcomingMeetup} />
      {/* <CTA actions={home.callToActions} /> */}
    </>
  );
};

export default HomePageTemplate;
