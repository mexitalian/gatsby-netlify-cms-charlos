import React from "react";


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


  export default Header;