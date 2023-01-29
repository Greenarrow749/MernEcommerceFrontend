import React from "react";
import { Button, Typography, Avatar } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import MailIcon from "@material-ui/icons/Mail";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import ProfileIcon from "../../../images/Profile.png"
import "./AboutSection.css";

const About = () => {
  const MailUs = () => {
    window.location = "mailto:ashishpd749@gmail.com";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={ProfileIcon}
              alt="Founder"
            />
            <Typography>Ashish Prasad</Typography>
            <Button onClick={MailUs} color="primary">
              Mail Us <MailIcon/>
            </Button>
            <span>
              This is a sample project built by Ashish Prasad to practice MERN stack and learn web development.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://twitter.com/ashishpd749"
              target="blank"
            >
              <TwitterIcon />
            </a>

            <a href="https://www.linkedin.com/in/ashish-prasad-2217a0119/" target="blank">
              <LinkedInIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;