import React from "react";
import CustomLink from "../../components/CustomLink";

const CTA = ({ actions }) => (
    <section className="ctaBlock">
        <CustomLink
          linkType={actions.firstCTA.linkType}
          linkURL={actions.firstCTA.linkURL}
          className="ctaBlock-pattern  ctaBlock-pattern--first"
        >
          <div className="ctaBlock-cta">
            <span className="ctaBlock-ctaHeading">
              {actions.firstCTA.heading}
            </span>
            <p className="ctaBlock-ctaDescription">
              {actions.firstCTA.subHeading}
            </p>
          </div>
        </CustomLink>
        <CustomLink
          linkType={actions.secondCTA.linkType}
          linkURL={actions.secondCTA.linkURL}
          className="ctaBlock-pattern  ctaBlock-pattern--second"
        >
          <div className="ctaBlock-cta">
            <span className="ctaBlock-ctaHeading">
              {actions.secondCTA.heading}
            </span>
            <p className="ctaBlock-ctaDescription">
              {actions.secondCTA.subHeading}
            </p>
          </div>
        </CustomLink>
      </section>
)

export default CTA;
