import React from "react";
import Map from "../../components/Map";
import HeadshotPlaceholder from "../../img/headshot-placeholder.svg";


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
      {/* <p className="upcomingMeetup-mapNote">{note}</p> */}
    </>
  );
};


const Testimonials = ({ home, testimonials = {} }) => {
  const { presenters: peers = [] } = testimonials;
  return (
    <section className="upcomingMeetup  section">
      <div className="upcomingMeetup-container  container">
        <h2 className="upcomingMeetup-title">{home.upcomingMeetupHeading}</h2>
        {testimonials ? (
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
              {testimonials.location.name || ""}
            </p>
            <HomeMap note={home.mapsNote} location={testimonials.location} />
          </>
        ) : (
          <p className="upcomingMeetup-detail">{home.noUpcomingMeetupText}</p>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
