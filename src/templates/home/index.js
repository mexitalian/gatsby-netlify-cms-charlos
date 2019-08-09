import React from "react";
import Map from "../../components/Map";
import HeadshotPlaceholder from "../../img/headshot-placeholder.svg";
import CustomLink from "../../components/CustomLink";

const Links = ({ links }) => (
  <ul className="hero-links">
    {links &&
      links.map((link, index) => (
        <li key={`hero-links-${index}`} className="hero-linkItem">
          <a className="hero-link" href={link.linkURL}>
            {link.linkText}
          </a>
        </li>
      ))}
  </ul>
);

const Header = ({ home }) => (
  <section className="header">
    <div className="header-container container">
      {home.headerImage && (
        <img
          className="header-image"
          src={home.headerImage.image}
          alt={home.headerImage.imageAlt}
        />
      )}
      <div className="header-tagline-container">
        <h3 className="header-tagline">
          <span className="header-taglinePart">{home.title}</span>
        </h3>
        <h4 className="header-subheading">{home.subtitle}</h4>
      </div>
      <Links links={home.links} />
    </div>
  </section>
);

const HomeMap = ({ note, location }) => {
  if (!location) return null;
  const latitude = parseFloat(location.mapsLatitude);
  const longitude = parseFloat(location.mapsLongitude);
  return (
    <>
      <div className="upcomingMeetup-mapWrapper">
        <Map
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBTxauB_VWpo0_8hWELlE3pN59uuHzxD-8&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          link={location.mapsLink}
          latitude={latitude}
          longitude={longitude}
          // add an adequate zoom level
        />
      </div>
      <p className="upcomingMeetup-mapNote">{note}</p>
    </>
  );
};

const Peer = ({ peer }) => {
  const link = peer.links[0];
  return (
    <div className="upcomingMeetup-presenter" key={peer.text}>
      <div className="upcomingMeetup-presenterTop">
        <img
          className="upcomingMeetup-presenterImage"
          src={peer.image ? peer.image : HeadshotPlaceholder}
          alt={peer.image ? peer.name : "Default headshot placeholder"}
        />
        <p className="upcomingMeetup-presenterDescription">{peer.text}</p>
      </div>
      <div className="upcomingMeetup-presenterSignature">
        <span className="upcomingMeetup-presenterName">
          <a href={link.linkURL}>{peer.name}</a>
        </span>
        <span className="upcomingMeetup-presenterPresentationTitle">
          {peer.presentationTitle}
        </span>
      </div>
    </div>
  );
};

const Testimonials = ({ home, testimonals = {} }) => {
  const { presenters: peers = [] } = testimonals;
  return (
    <section className="upcomingMeetup  section">
      <div className="upcomingMeetup-container  container">
        <h2 className="upcomingMeetup-title">{home.upcomingMeetupHeading}</h2>
        {testimonals ? (
          <>
            {peers.length > 0 && (
              <div className="upcomingMeetup-presenters">
                {peers.map(peer => (
                  <Peer peer={peer} />
                ))}
              </div>
            )}
            <p className="upcomingMeetup-detail  upcomingMeetup-detail--location">
              <span className="upcomingMeetup-detailLabel">Currently in: </span>
              {testimonals.location.name}
            </p>
            <HomeMap note={home.mapsNote} location={testimonals.location} />
          </>
        ) : (
          <p className="upcomingMeetup-detail">{home.noUpcomingMeetupText}</p>
        )}
      </div>
    </section>
  );
};

const HomePageTemplate = ({ home, upcomingMeetup = null }) => {
  return (
    <>
      <Header home={home} />
      <Testimonials home={home} testimonals={upcomingMeetup} />
      <section className="ctaBlock">
        <CustomLink
          linkType={home.callToActions.firstCTA.linkType}
          linkURL={home.callToActions.firstCTA.linkURL}
          className="ctaBlock-pattern  ctaBlock-pattern--first"
        >
          <div className="ctaBlock-cta">
            <span className="ctaBlock-ctaHeading">
              {home.callToActions.firstCTA.heading}
            </span>
            <p className="ctaBlock-ctaDescription">
              {home.callToActions.firstCTA.subHeading}
            </p>
          </div>
        </CustomLink>
        <CustomLink
          linkType={home.callToActions.secondCTA.linkType}
          linkURL={home.callToActions.secondCTA.linkURL}
          className="ctaBlock-pattern  ctaBlock-pattern--second"
        >
          <div className="ctaBlock-cta">
            <span className="ctaBlock-ctaHeading">
              {home.callToActions.secondCTA.heading}
            </span>
            <p className="ctaBlock-ctaDescription">
              {home.callToActions.secondCTA.subHeading}
            </p>
          </div>
        </CustomLink>
      </section>
    </>
  );
};

export default HomePageTemplate;
